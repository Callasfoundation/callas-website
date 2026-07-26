// Repositories/IResourceRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IResourceRepository
{
    Task<IEnumerable<Resource>> GetAllResourcesAsync();
    Task<Resource?> GetResourceByIdAsync(int id);
    Task AddResourceAsync(Resource resource);
    Task<bool> DeleteResourceAsync(Resource resource);
    Task<bool> SaveChangesAsync();
}