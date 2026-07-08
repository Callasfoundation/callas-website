// Repositories/ResourceRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class ResourceRepository : IResourceRepository
{
    private readonly ApplicationDbContext _context;

    public ResourceRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Resource>> GetAllResourcesAsync() => await _context.Resources.ToListAsync();

    public async Task<Resource?> GetResourceByIdAsync(int id) => await _context.Resources.FindAsync(id);

    public async Task AddResourceAsync(Resource resource) => await _context.Resources.AddAsync(resource);

    public async Task<bool> DeleteResourceAsync(Resource resource)
    {
        _context.Resources.Remove(resource);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}