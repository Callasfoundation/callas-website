
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Gallery
{
    public class UpdateGalleryImageDto
    {
        [Required, Url]
        public string ImageUrl { get; set; } = string.Empty;

        [Required, MaxLength(200)]
        public string Caption { get; set; } = string.Empty;
    }
}