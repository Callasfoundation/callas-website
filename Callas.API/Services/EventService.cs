using Callas.API.DTOs.Events;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class EventService : IEventService
{
    private readonly IEventRepository _eventRepository;

    public EventService(IEventRepository eventRepository)
    {
        _eventRepository = eventRepository;
    }

    public async Task<IEnumerable<EventDto>> GetAllAsync()
    {
        var events = await _eventRepository.GetAllEventsAsync();
        return events.Select(ToDto);
    }

    public async Task<EventDto?> GetByIdAsync(int id)
    {
        var ev = await _eventRepository.GetEventByIdAsync(id);
        return ev is null ? null : ToDto(ev);
    }

    public async Task<EventDto> CreateAsync(CreateEventDto dto)
    {
        var ev = new Event
        {
            Title = dto.Title,
            Date = dto.Date,
            Time = dto.Time,
            Location = dto.Location,
            Description = dto.Description,
        };

        await _eventRepository.AddEventAsync(ev);
        await _eventRepository.SaveChangesAsync();

        return ToDto(ev);
    }

    public async Task<bool> UpdateAsync(int id, UpdateEventDto dto)
    {
        var ev = await _eventRepository.GetEventByIdAsync(id);
        if (ev is null) return false;

        ev.Title = dto.Title;
        ev.Date = dto.Date;
        ev.Time = dto.Time;
        ev.Location = dto.Location;
        ev.Description = dto.Description;

        return await _eventRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var ev = await _eventRepository.GetEventByIdAsync(id);
        if (ev is null) return false;

        return await _eventRepository.DeleteEventAsync(ev);
    }

    private static EventDto ToDto(Event ev) => new()
    {
        Id = ev.Id,
        Title = ev.Title,
        Date = ev.Date,
        Time = ev.Time,
        Location = ev.Location,
        Description = ev.Description,
    };
}