// DTOs/Team/CreateTeamMemberDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Team
{
    public class CreateTeamMemberDto
    {
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Role { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}