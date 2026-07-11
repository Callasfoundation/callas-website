using Callas.API.DTOs.News;

namespace Callas.API.Interfaces;

public interface INewsService
{
    Task<IEnumerable<NewsDto>> GetAllAsync();

    Task<NewsDto?> GetByIdAsync(int id);

    Task<NewsDto> CreateAsync(CreateNewsDto dto);

    Task<bool> UpdateAsync(int id, UpdateNewsDto dto);

    Task<bool> DeleteAsync(int id);
}