// Repositories/DonationRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class DonationRepository : IDonationRepository
{
    private readonly ApplicationDbContext _context;

    public DonationRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Donation>> GetAllDonationsAsync() =>
        await _context.Donations.OrderByDescending(d => d.DonationDate).ToListAsync();

    public async Task<Donation?> GetDonationByIdAsync(int id) => await _context.Donations.FindAsync(id);

    public async Task AddDonationAsync(Donation donation) => await _context.Donations.AddAsync(donation);

    public async Task<bool> DeleteDonationAsync(Donation donation)
    {
        _context.Donations.Remove(donation);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}