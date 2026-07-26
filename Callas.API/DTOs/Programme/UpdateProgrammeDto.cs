using System.ComponentModel.DataAnnotations;
namespace Callas.API.DTOs.Programmes
{
    public class UpdateProgrammeDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required, MaxLength(200)]
        public string Slug { get; set; } = string.Empty;

        [MaxLength(300)]
        public string Short { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Url]
        public string ImageUrl { get; set; } = string.Empty;

        [Url]
        public string VideoUrl { get; set; } = string.Empty;

        [Required]
        public DateTime StartDate { get; set; }
    }
}