// DTOs/Team/TeamMemberDto.cs
namespace Callas.API.DTOs.Team
{
    public class TeamMemberDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}