// Repositories/ProgrammeRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class ProgrammeRepository : IProgrammeRepository
{
    private readonly ApplicationDbContext _context;

    public ProgrammeRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Programme>> GetAllProgrammesAsync() => await _context.Programmes.ToListAsync();

    public async Task<Programme?> GetProgrammeByIdAsync(int id) => await _context.Programmes.FindAsync(id);

    public async Task AddProgrammeAsync(Programme programme) => await _context.Programmes.AddAsync(programme);

    public async Task<bool> DeleteProgrammeAsync(Programme programme)
    {
        _context.Programmes.Remove(programme);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}