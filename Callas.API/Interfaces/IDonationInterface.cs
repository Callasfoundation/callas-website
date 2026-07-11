// Interfaces/IDonationService.cs
using Callas.API.DTOs.Donations;

namespace Callas.API.Interfaces;

public interface IDonationService
{
    Task<IEnumerable<DonationDto>> GetAllAsync();
    Task<DonationDto?> GetByIdAsync(int id);
    Task<DonationDto> CreateAsync(CreateDonationDto dto);
    Task<bool> DeleteAsync(int id);
}