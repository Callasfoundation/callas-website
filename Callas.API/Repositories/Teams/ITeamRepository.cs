// Repositories/ITeamRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface ITeamRepository
{
    Task<IEnumerable<TeamMember>> GetAllMembersAsync();
    Task<TeamMember?> GetMemberByIdAsync(int id);
    Task AddMemberAsync(TeamMember member);
    Task<bool> DeleteMemberAsync(TeamMember member);
    Task<bool> SaveChangesAsync();
}