using Callas.API.Models;

namespace Callas.API.Repositories;

public interface INewsRepository
{
    Task<IEnumerable<News>> GetAllNewsAsync();
    Task<News?> GetNewsByIdAsync(int id);
    Task AddNewsAsync(News news);
    Task<bool> DeleteNewsAsync(News news);
    Task<bool> SaveChangesAsync();
}