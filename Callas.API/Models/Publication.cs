namespace Callas.API.Models;

public class Publication
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string? Description { get; set; }
    public string Category { get; set; } = "";
    public DateTime PublishedDate { get; set; }
    public string FileUrl { get; set; } = "";
    public string? CoverImageUrl { get; set; }
}
