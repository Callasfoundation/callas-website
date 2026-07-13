using Callas.API.DTOs.Events;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEvents()
        {
            var events = await _eventService.GetAllAsync();
            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvent(int id)
        {
            var ev = await _eventService.GetByIdAsync(id);
            return ev is null ? NotFound() : Ok(ev);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent(CreateEventDto dto)
        {
            var created = await _eventService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetEvent), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(int id, UpdateEventDto dto)
        {
            var updated = await _eventService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var deleted = await _eventService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}