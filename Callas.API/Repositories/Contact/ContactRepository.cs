using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class ContactRepository : IContactRepository
{
    private readonly ApplicationDbContext _context;

    public ContactRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ContactMessage>> GetAllMessagesAsync() =>
        await _context.ContactMessages.OrderByDescending(m => m.DateSubmitted).ToListAsync();

    public async Task<ContactMessage?> GetMessageByIdAsync(int id) => await _context.ContactMessages.FindAsync(id);

    public async Task AddMessageAsync(ContactMessage message) => await _context.ContactMessages.AddAsync(message);

    public async Task<bool> DeleteMessageAsync(ContactMessage message)
    {
        _context.ContactMessages.Remove(message);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}