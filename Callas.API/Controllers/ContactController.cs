using Callas.API.DTOs.Contact;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMessages()
        {
            var messages = await _contactService.GetAllAsync();
            return Ok(messages);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMessageById(int id)
        {
            var message = await _contactService.GetByIdAsync(id);
            return message is null ? NotFound() : Ok(message);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateMessage(CreateContactMessageDto dto)
        {
            var created = await _contactService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetMessageById), new { id = created.Id }, created);
        }

        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateReadStatus(int id, UpdateContactMessageStatusDto dto)
        {
            var updated = await _contactService.UpdateReadStatusAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(int id)
        {
            var deleted = await _contactService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}