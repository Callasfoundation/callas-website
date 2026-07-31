using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Gallery
{
    public class UpdateGalleryImageDto
    {
        [Required, Url]
        public string ImageUrl { get; set; } = string.Empty;

        [Required, MaxLength(200)]
        public string Caption { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Category { get; set; } = "Uncategorised";

        [MaxLength(10)]
        public string MediaType { get; set; } = "image";
    }
}
