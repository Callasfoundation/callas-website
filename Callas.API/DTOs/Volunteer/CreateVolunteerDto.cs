// DTOs/Volunteers/CreateVolunteerDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Volunteers
{
    public class CreateVolunteerDto
    {
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, MaxLength(30)]
        public string Phone { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Track { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string AvailableDays { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Note { get; set; } = string.Empty;
    }
}