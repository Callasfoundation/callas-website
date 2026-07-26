// DTOs/Resources/ResourceDto.cs
namespace Callas.API.DTOs.Resources
{
    public class ResourceDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
    }
}