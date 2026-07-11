// Interfaces/IImpactService.cs
using Callas.API.DTOs.Impact;

namespace Callas.API.Interfaces;

public interface IImpactService
{
    Task<IEnumerable<ImpactStatisticDto>> GetAllAsync();
    Task<ImpactStatisticDto?> GetByIdAsync(int id);
    Task<ImpactStatisticDto> CreateAsync(CreateImpactStatisticDto dto);
    Task<bool> UpdateAsync(int id, UpdateImpactStatisticDto dto);
    Task<bool> DeleteAsync(int id);
}