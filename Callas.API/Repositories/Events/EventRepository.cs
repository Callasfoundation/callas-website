using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class EventRepository : IEventRepository
{
    private readonly ApplicationDbContext _context;

    public EventRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Event>> GetAllEventsAsync() => await _context.Events.ToListAsync();

    public async Task<Event?> GetEventByIdAsync(int id) => await _context.Events.FindAsync(id);

    public async Task AddEventAsync(Event ev) => await _context.Events.AddAsync(ev);

    public async Task<bool> DeleteEventAsync(Event ev)
    {
        _context.Events.Remove(ev);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}