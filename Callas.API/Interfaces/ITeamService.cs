// Interfaces/ITeamService.cs
using Callas.API.DTOs.Team;

namespace Callas.API.Interfaces;

public interface ITeamService
{
    Task<IEnumerable<TeamMemberDto>> GetAllAsync();
    Task<TeamMemberDto?> GetByIdAsync(int id);
    Task<TeamMemberDto> CreateAsync(CreateTeamMemberDto dto);
    Task<bool> UpdateAsync(int id, UpdateTeamMemberDto dto);
    Task<bool> DeleteAsync(int id);
}