// Interfaces/IResourceService.cs
using Callas.API.DTOs.Resources;

namespace Callas.API.Interfaces;

public interface IResourceService
{
    Task<IEnumerable<ResourceDto>> GetAllAsync();
    Task<ResourceDto?> GetByIdAsync(int id);
    Task<ResourceDto> CreateAsync(CreateResourceDto dto);
    Task<bool> UpdateAsync(int id, UpdateResourceDto dto);
    Task<bool> DeleteAsync(int id);
}