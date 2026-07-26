using Callas.API.DTOs.Contact;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> GetAllMessages() =>
            Ok(await _contactService.GetAllAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMessageById(int id)
        {
            var msg = await _contactService.GetByIdAsync(id);
            return msg is null ? NotFound() : Ok(msg);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CreateMessage(CreateContactMessageDto dto)
        {
            var created = await _contactService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetMessageById), new { id = created.Id }, created);
        }

        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateReadStatus(int id, UpdateContactMessageStatusDto dto)
        {
            var ok = await _contactService.UpdateReadStatusAsync(id, dto);
            return ok ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(int id)
        {
            var ok = await _contactService.DeleteAsync(id);
            return ok ? NoContent() : NotFound();
        }
    }
}