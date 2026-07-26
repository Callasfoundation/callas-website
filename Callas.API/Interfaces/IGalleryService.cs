// Interfaces/IGalleryService.cs
using Callas.API.DTOs.Gallery;

namespace Callas.API.Interfaces;

public interface IGalleryService
{
    Task<IEnumerable<GalleryImageDto>> GetAllAsync();
    Task<GalleryImageDto?> GetByIdAsync(int id);
    Task<GalleryImageDto> CreateAsync(CreateGalleryImageDto dto);
    Task<bool> UpdateAsync(int id, UpdateGalleryImageDto dto);
    Task<bool> DeleteAsync(int id);
}