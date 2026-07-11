// Repositories/VolunteerRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class VolunteerRepository : IVolunteerRepository
{
    private readonly ApplicationDbContext _context;

    public VolunteerRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Volunteer>> GetAllVolunteersAsync() => await _context.Volunteers.ToListAsync();

    public async Task<Volunteer?> GetVolunteerByIdAsync(int id) => await _context.Volunteers.FindAsync(id);

    public async Task AddVolunteerAsync(Volunteer volunteer) => await _context.Volunteers.AddAsync(volunteer);

    public async Task<bool> DeleteVolunteerAsync(Volunteer volunteer)
    {
        _context.Volunteers.Remove(volunteer);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}