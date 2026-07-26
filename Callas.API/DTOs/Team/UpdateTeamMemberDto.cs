using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Team
{
    public class UpdateTeamMemberDto
    {
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Role { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Bio { get; set; } = string.Empty;

        [Url]
        public string ImageUrl { get; set; } = string.Empty;
    }
}