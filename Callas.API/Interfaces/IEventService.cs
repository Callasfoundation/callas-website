using Callas.API.DTOs.Events;

namespace Callas.API.Interfaces;

public interface IEventService
{
    Task<IEnumerable<EventDto>> GetAllAsync();
    Task<EventDto?> GetByIdAsync(int id);
    Task<EventDto> CreateAsync(CreateEventDto dto);
    Task<bool> UpdateAsync(int id, UpdateEventDto dto);
    Task<bool> DeleteAsync(int id);
}