// Services/ResourceService.cs
using Callas.API.DTOs.Resources;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class ResourceService : IResourceService
{
    private readonly IResourceRepository _resourceRepository;

    public ResourceService(IResourceRepository resourceRepository)
    {
        _resourceRepository = resourceRepository;
    }

    public async Task<IEnumerable<ResourceDto>> GetAllAsync()
    {
        var resources = await _resourceRepository.GetAllResourcesAsync();
        return resources.Select(ToDto);
    }

    public async Task<ResourceDto?> GetByIdAsync(int id)
    {
        var resource = await _resourceRepository.GetResourceByIdAsync(id);
        return resource is null ? null : ToDto(resource);
    }

    public async Task<ResourceDto> CreateAsync(CreateResourceDto dto)
    {
        var resource = new Resource
        {
            Title = dto.Title,
            Type = dto.Type,
            Description = dto.Description,
            Url = dto.Url,
        };

        await _resourceRepository.AddResourceAsync(resource);
        await _resourceRepository.SaveChangesAsync();

        return ToDto(resource);
    }

    public async Task<bool> UpdateAsync(int id, UpdateResourceDto dto)
    {
        var resource = await _resourceRepository.GetResourceByIdAsync(id);
        if (resource is null) return false;

        resource.Title = dto.Title;
        resource.Type = dto.Type;
        resource.Description = dto.Description;
        resource.Url = dto.Url;

        return await _resourceRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var resource = await _resourceRepository.GetResourceByIdAsync(id);
        if (resource is null) return false;

        return await _resourceRepository.DeleteResourceAsync(resource);
    }

    private static ResourceDto ToDto(Resource resource) => new()
    {
        Id = resource.Id,
        Title = resource.Title,
        Type = resource.Type,
        Description = resource.Description,
        Url = resource.Url,
    };
}