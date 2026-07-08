// Repositories/IPartnerRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IPartnerRepository
{
    Task<IEnumerable<Partner>> GetAllPartnersAsync();
    Task<Partner?> GetPartnerByIdAsync(int id);
    Task AddPartnerAsync(Partner partner);
    Task<bool> DeletePartnerAsync(Partner partner);
    Task<bool> SaveChangesAsync();
}