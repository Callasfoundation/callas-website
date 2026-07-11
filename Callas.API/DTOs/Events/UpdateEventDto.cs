
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Events
{
    public class UpdateEventDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [Required, MaxLength(50)]
        public string Time { get; set; } = string.Empty;

        [Required, MaxLength(200)]
        public string Location { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;
    }
}