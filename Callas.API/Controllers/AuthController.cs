using Callas.API.DTOs.Auth;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        /// <summary>
        /// Login to the admin dashboard.
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var result = await _authService.LoginAsync(dto);
            return result is null ? Unauthorized(new { Message = "Invalid username or password." }) : Ok(result);
        }

        /// <summary>
        /// Logout the current user. Stateless JWT means there's nothing to invalidate
        /// server-side yet - the client just discards the token. Once refresh tokens
        /// are added, this should revoke the stored refresh token instead.
        /// </summary>
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            return Ok(new { Message = "Logout successful." });
        }
    }
}