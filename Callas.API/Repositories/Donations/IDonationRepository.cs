// Repositories/IDonationRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IDonationRepository
{
    Task<IEnumerable<Donation>> GetAllDonationsAsync();
    Task<Donation?> GetDonationByIdAsync(int id);
    Task AddDonationAsync(Donation donation);
    Task<bool> DeleteDonationAsync(Donation donation);
    Task<bool> SaveChangesAsync();
}