using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IPublicationRepository
{
    Task<IEnumerable<Publication>> GetAllPublicationsAsync();
    Task<Publication?> GetPublicationByIdAsync(int id);
    Task AddPublicationAsync(Publication publication);
    Task<bool> DeletePublicationAsync(Publication publication);
    Task<bool> SaveChangesAsync();
}
