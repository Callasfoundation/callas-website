using Callas.API.Models;
using Callas.API.Data;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class PublicationRepository : IPublicationRepository
{
    private readonly ApplicationDbContext _context;

    public PublicationRepository(ApplicationDbContext context) => _context = context;

    public async Task<IEnumerable<Publication>> GetAllPublicationsAsync() =>
        await _context.Publications
            .AsNoTracking()
            .OrderByDescending(p => p.PublishedDate)
            .ToListAsync();

    public async Task<Publication?> GetPublicationByIdAsync(int id) =>
        await _context.Publications.FirstOrDefaultAsync(p => p.Id == id);

    public async Task AddPublicationAsync(Publication publication) =>
        await _context.Publications.AddAsync(publication);

    public async Task<bool> DeletePublicationAsync(Publication publication)
    {
        _context.Publications.Remove(publication);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() =>
        await _context.SaveChangesAsync() > 0;
}
