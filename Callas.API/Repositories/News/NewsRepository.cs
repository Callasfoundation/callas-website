using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class NewsRepository : INewsRepository
{
    private readonly ApplicationDbContext _context;

    public NewsRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<News>> GetAllNewsAsync() => await _context.News.ToListAsync();

    public async Task<News?> GetNewsByIdAsync(int id) => await _context.News.FindAsync(id);

    public async Task AddNewsAsync(News news) => await _context.News.AddAsync(news);

    public async Task<bool> DeleteNewsAsync(News news)
    {
        _context.News.Remove(news);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => await _context.SaveChangesAsync() > 0;
}