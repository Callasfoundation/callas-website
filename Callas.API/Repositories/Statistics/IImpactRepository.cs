// Repositories/IImpactRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IImpactRepository
{
    Task<IEnumerable<ImpactStatistic>> GetAllStatisticsAsync();
    Task<ImpactStatistic?> GetStatisticByIdAsync(int id);
    Task AddStatisticAsync(ImpactStatistic statistic);
    Task<bool> DeleteStatisticAsync(ImpactStatistic statistic);
    Task<bool> SaveChangesAsync();
}