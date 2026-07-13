namespace Callas.API.DTOs.News
{
    public class NewsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Excerpt { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public DateTime PublishedDate { get; set; }
        public string Category { get; set; } = string.Empty;
    }
}