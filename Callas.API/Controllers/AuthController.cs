using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Callas.API.Services;
using Callas.API.DTOs.Auth;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly TokenRevocationService _revocation;

        public AuthController(IAuthService authService, TokenRevocationService revocation)
        {
            _authService = authService;
            _revocation = revocation;
        }

        [EnableRateLimiting("login")]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var result = await _authService.LoginAsync(dto);
            return result is null ? Unauthorized(new { Message = "Invalid username or password." }) : Ok(result);
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            var raw = await HttpContext.GetTokenAsync("access_token");
            if (!string.IsNullOrEmpty(raw))
            {
                var jwt = new JwtSecurityTokenHandler().ReadJwtToken(raw);
                _revocation.Revoke(jwt.Id, jwt.ValidTo);
            }
            return Ok(new { Message = "Logout successful." });
        }

        [Authorize]
        [HttpPut("password")]
        public async Task<IActionResult> ChangePassword(ChangePasswordDto dto)
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userIdClaim is null || !int.TryParse(userIdClaim, out var userId))
                return Unauthorized();

            var ok = await _authService.ChangePasswordAsync(userId, dto);
            return ok ? Ok(new { Message = "Password updated." }) : BadRequest(new { Message = "Current password is incorrect." });
        }
    }
}
