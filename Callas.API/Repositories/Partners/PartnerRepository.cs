// Repositories/PartnerRepository.cs
using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class PartnerRepository : IPartnerRepository
{
    private readonly ApplicationDbContext _context;

    public PartnerRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Partner>> GetAllPartnersAsync() => await _context.Partners.ToListAsync();

    public async Task<Partner?> GetPartnerByIdAsync(int id) => await _context.Partners.FindAsync(id);

    public async Task AddPartnerAsync(Partner partner) => await _context.Partners.AddAsync(partner);

    public async Task<bool> DeletePartnerAsync(Partner partner)
    {
        _context.Partners.Remove(partner);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}