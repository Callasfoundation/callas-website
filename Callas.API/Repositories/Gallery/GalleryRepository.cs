// Repositories/GalleryRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class GalleryRepository : IGalleryRepository
{
    private readonly ApplicationDbContext _context;

    public GalleryRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<GalleryImage>> GetAllImagesAsync() => await _context.GalleryImages.ToListAsync();

    public async Task<GalleryImage?> GetImageByIdAsync(int id) => await _context.GalleryImages.FindAsync(id);

    public async Task AddImageAsync(GalleryImage image) => await _context.GalleryImages.AddAsync(image);

    public async Task<bool> DeleteImageAsync(GalleryImage image)
    {
        _context.GalleryImages.Remove(image);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}