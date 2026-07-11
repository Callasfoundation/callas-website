// Services/ImpactService.cs
using Callas.API.DTOs.Impact;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class ImpactService : IImpactService
{
    private readonly IImpactRepository _impactRepository;

    public ImpactService(IImpactRepository impactRepository)
    {
        _impactRepository = impactRepository;
    }

    public async Task<IEnumerable<ImpactStatisticDto>> GetAllAsync()
    {
        var stats = await _impactRepository.GetAllStatisticsAsync();
        return stats.Select(ToDto);
    }

    public async Task<ImpactStatisticDto?> GetByIdAsync(int id)
    {
        var stat = await _impactRepository.GetStatisticByIdAsync(id);
        return stat is null ? null : ToDto(stat);
    }

    public async Task<ImpactStatisticDto> CreateAsync(CreateImpactStatisticDto dto)
    {
        var stat = new ImpactStatistic
        {
            Label = dto.Label,
            Value = dto.Value,
            Suffix = dto.Suffix,
        };

        await _impactRepository.AddStatisticAsync(stat);
        await _impactRepository.SaveChangesAsync();

        return ToDto(stat);
    }

    public async Task<bool> UpdateAsync(int id, UpdateImpactStatisticDto dto)
    {
        var stat = await _impactRepository.GetStatisticByIdAsync(id);
        if (stat is null) return false;

        stat.Label = dto.Label;
        stat.Value = dto.Value;
        stat.Suffix = dto.Suffix;

        return await _impactRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var stat = await _impactRepository.GetStatisticByIdAsync(id);
        if (stat is null) return false;

        return await _impactRepository.DeleteStatisticAsync(stat);
    }

    private static ImpactStatisticDto ToDto(ImpactStatistic stat) => new()
    {
        Id = stat.Id,
        Label = stat.Label,
        Value = stat.Value,
        Suffix = stat.Suffix,
    };
}