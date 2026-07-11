using Callas.API.DTOs.Auth;

namespace Callas.API.Interfaces;

public interface IAuthService
{
    Task<LoginResponseDto?> LoginAsync(LoginDto dto);
}