// DTOs/Auth/LoginDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Auth
{
    public class LoginDto
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}