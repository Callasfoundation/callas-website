using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class TeamMember
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Role { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;
}