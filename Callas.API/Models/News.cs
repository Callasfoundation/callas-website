using System.ComponentModel.DataAnnotations;

namespace Callas.API.Models;

public class News
{
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [MaxLength(500)]
    public string Excerpt { get; set; } = string.Empty;

    [Required]
    public string Body { get; set; } = string.Empty;

    public DateTime PublishedDate { get; set; }

    [MaxLength(100)]
    public string Category { get; set; } = string.Empty;
}