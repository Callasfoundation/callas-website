// DTOs/News/CreateNewsDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.News
{
    public class UpdateNewsDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required, MaxLength(500)]
        public string Excerpt { get; set; } = string.Empty;

        [Required]
        public string Body { get; set; } = string.Empty;

        [Required]
        public DateTime PublishedDate { get; set; }

        [Required, MaxLength(50)]
        public string Category { get; set; } = string.Empty;
    }
}