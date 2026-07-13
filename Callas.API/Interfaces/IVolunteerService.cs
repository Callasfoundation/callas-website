// Interfaces/IVolunteerService.cs
using Callas.API.DTOs.Volunteers;

namespace Callas.API.Interfaces;

public interface IVolunteerService
{
    Task<IEnumerable<VolunteerDto>> GetAllAsync();
    Task<VolunteerDto?> GetByIdAsync(int id);
    Task<VolunteerDto> CreateAsync(CreateVolunteerDto dto);
    Task<bool> DeleteAsync(int id);
}