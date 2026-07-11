// Interfaces/IPartnerService.cs
using Callas.API.DTOs.Partners;

namespace Callas.API.Interfaces;

public interface IPartnerService
{
    Task<IEnumerable<PartnerDto>> GetAllAsync();
    Task<PartnerDto?> GetByIdAsync(int id);
    Task<PartnerDto> CreateAsync(CreatePartnerDto dto);
    Task<bool> UpdateAsync(int id, UpdatePartnerDto dto);
    Task<bool> DeleteAsync(int id);
}