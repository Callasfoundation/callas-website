namespace Callas.API.DTOs.Publications
{
    public class PublicationDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string? Description { get; set; }
        public string Category { get; set; } = "";
        public DateTime PublishedDate { get; set; }
        public string FileUrl { get; set; } = "";
        public string? CoverImageUrl { get; set; }
    }

    public class CreatePublicationDto
    {
        public string Title { get; set; } = "";
        public string? Description { get; set; }
        public string Category { get; set; } = "";
        public DateTime PublishedDate { get; set; }
        public string FileUrl { get; set; } = "";
        public string? CoverImageUrl { get; set; }
    }

    public class UpdatePublicationDto : CreatePublicationDto { }
}
