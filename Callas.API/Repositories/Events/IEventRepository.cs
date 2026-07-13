using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IEventRepository
{
    Task<IEnumerable<Event>> GetAllEventsAsync();
    Task<Event?> GetEventByIdAsync(int id);
    Task AddEventAsync(Event ev);
    Task<bool> DeleteEventAsync(Event ev);
    Task<bool> SaveChangesAsync();
}