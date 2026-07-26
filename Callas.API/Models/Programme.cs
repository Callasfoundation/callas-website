using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class Programme
{
    public int Id { get; set; }

    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(200)]
    public string Slug { get; set; } = string.Empty;

    [MaxLength(300)]
    public string Short { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    [MaxLength(500)]
    public string ImageUrl { get; set; } = string.Empty;

    [MaxLength(500)]
    public string VideoUrl { get; set; } = string.Empty;

    public DateTime StartDate { get; set; }
}