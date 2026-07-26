using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class ContactMessage
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Subject { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Message { get; set; } = string.Empty;

    public DateTime DateSubmitted { get; set; }

    public bool IsRead { get; set; }
}