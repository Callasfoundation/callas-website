using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class Resource
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Type { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Url { get; set; } = string.Empty;
}