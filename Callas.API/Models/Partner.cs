using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class Partner
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string LogoUrl { get; set; } = string.Empty;

    public string Website { get; set; } = string.Empty;
}