// Repositories/IGalleryRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IGalleryRepository
{
    Task<IEnumerable<GalleryImage>> GetAllImagesAsync();
    Task<GalleryImage?> GetImageByIdAsync(int id);
    Task AddImageAsync(GalleryImage image);
    Task<bool> DeleteImageAsync(GalleryImage image);
    Task<bool> SaveChangesAsync();
}