// DTOs/Gallery/GalleryImageDto.cs
namespace Callas.API.DTOs.Gallery
{
    public class GalleryImageDto
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public string Caption { get; set; } = string.Empty;
    }
}