// Repositories/TeamRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class TeamRepository : ITeamRepository
{
    private readonly ApplicationDbContext _context;

    public TeamRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<TeamMember>> GetAllMembersAsync() => await _context.TeamMembers.ToListAsync();

    public async Task<TeamMember?> GetMemberByIdAsync(int id) => await _context.TeamMembers.FindAsync(id);

    public async Task AddMemberAsync(TeamMember member) => await _context.TeamMembers.AddAsync(member);

    public async Task<bool> DeleteMemberAsync(TeamMember member)
    {
        _context.TeamMembers.Remove(member);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}