// DTOs/Resources/CreateResourceDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Resources
{
    public class CreateResourceDto
    {
        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Type { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required, Url]
        public string Url { get; set; } = string.Empty;
    }
}