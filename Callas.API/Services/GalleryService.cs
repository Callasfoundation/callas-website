// Services/GalleryService.cs
using Callas.API.DTOs.Gallery;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class GalleryService : IGalleryService
{
    private readonly IGalleryRepository _galleryRepository;

    public GalleryService(IGalleryRepository galleryRepository)
    {
        _galleryRepository = galleryRepository;
    }

    public async Task<IEnumerable<GalleryImageDto>> GetAllAsync()
    {
        var images = await _galleryRepository.GetAllImagesAsync();
        return images.Select(ToDto);
    }

    public async Task<GalleryImageDto?> GetByIdAsync(int id)
    {
        var image = await _galleryRepository.GetImageByIdAsync(id);
        return image is null ? null : ToDto(image);
    }

    public async Task<GalleryImageDto> CreateAsync(CreateGalleryImageDto dto)
    {
        var image = new GalleryImage
        {
            ImageUrl = dto.ImageUrl,
            Caption = dto.Caption,
        };

        await _galleryRepository.AddImageAsync(image);
        await _galleryRepository.SaveChangesAsync();

        return ToDto(image);
    }

    public async Task<bool> UpdateAsync(int id, UpdateGalleryImageDto dto)
    {
        var image = await _galleryRepository.GetImageByIdAsync(id);
        if (image is null) return false;

        image.ImageUrl = dto.ImageUrl;
        image.Caption = dto.Caption;

        return await _galleryRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var image = await _galleryRepository.GetImageByIdAsync(id);
        if (image is null) return false;

        return await _galleryRepository.DeleteImageAsync(image);
    }

    private static GalleryImageDto ToDto(GalleryImage image) => new()
    {
        Id = image.Id,
        ImageUrl = image.ImageUrl,
        Caption = image.Caption,
    };
}