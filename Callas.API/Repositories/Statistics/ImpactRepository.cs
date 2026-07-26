// Repositories/ImpactRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class ImpactRepository : IImpactRepository
{
    private readonly ApplicationDbContext _context;

    public ImpactRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ImpactStatistic>> GetAllStatisticsAsync() => await _context.ImpactStatistics.ToListAsync();

    public async Task<ImpactStatistic?> GetStatisticByIdAsync(int id) => await _context.ImpactStatistics.FindAsync(id);

    public async Task AddStatisticAsync(ImpactStatistic statistic) => await _context.ImpactStatistics.AddAsync(statistic);

    public async Task<bool> DeleteStatisticAsync(ImpactStatistic statistic)
    {
        _context.ImpactStatistics.Remove(statistic);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}