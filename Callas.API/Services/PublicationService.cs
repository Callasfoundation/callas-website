using Callas.API.DTOs.Publications;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class PublicationService : IPublicationService
{
    private readonly IPublicationRepository _publicationRepository;

    public PublicationService(IPublicationRepository publicationRepository)
    {
        _publicationRepository = publicationRepository;
    }

    public async Task<IEnumerable<PublicationDto>> GetAllAsync()
    {
        var publications = await _publicationRepository.GetAllPublicationsAsync();
        return publications.Select(ToDto);
    }

    public async Task<PublicationDto?> GetByIdAsync(int id)
    {
        var publication = await _publicationRepository.GetPublicationByIdAsync(id);
        return publication is null ? null : ToDto(publication);
    }

    public async Task<PublicationDto> CreateAsync(CreatePublicationDto dto)
    {
        var publication = new Publication
        {
            Title = dto.Title,
            Description = dto.Description,
            Category = dto.Category,
            PublishedDate = dto.PublishedDate,
            FileUrl = dto.FileUrl,
            CoverImageUrl = dto.CoverImageUrl,
        };

        await _publicationRepository.AddPublicationAsync(publication);
        await _publicationRepository.SaveChangesAsync();

        return ToDto(publication);
    }

    public async Task<bool> UpdateAsync(int id, UpdatePublicationDto dto)
    {
        var publication = await _publicationRepository.GetPublicationByIdAsync(id);
        if (publication is null) return false;

        publication.Title = dto.Title;
        publication.Description = dto.Description;
        publication.Category = dto.Category;
        publication.PublishedDate = dto.PublishedDate;
        publication.FileUrl = dto.FileUrl;
        publication.CoverImageUrl = dto.CoverImageUrl;

        await _publicationRepository.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var publication = await _publicationRepository.GetPublicationByIdAsync(id);
        if (publication is null) return false;

        return await _publicationRepository.DeletePublicationAsync(publication);
    }

    private static PublicationDto ToDto(Publication p) => new()
    {
        Id = p.Id,
        Title = p.Title,
        Description = p.Description,
        Category = p.Category,
        PublishedDate = p.PublishedDate,
        FileUrl = p.FileUrl,
        CoverImageUrl = p.CoverImageUrl,
    };
}
