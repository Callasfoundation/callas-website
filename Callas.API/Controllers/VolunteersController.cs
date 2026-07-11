using Callas.API.DTOs.Volunteers;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class VolunteersController : ControllerBase
    {
        private readonly IVolunteerService _volunteerService;

        public VolunteersController(IVolunteerService volunteerService)
        {
            _volunteerService = volunteerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetVolunteers()
        {
            var volunteers = await _volunteerService.GetAllAsync();
            return Ok(volunteers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVolunteer(int id)
        {
            var volunteer = await _volunteerService.GetByIdAsync(id);
            return volunteer is null ? NotFound() : Ok(volunteer);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateVolunteer(CreateVolunteerDto dto)
        {
            var created = await _volunteerService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetVolunteer), new { id = created.Id }, created);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVolunteer(int id)
        {
            var deleted = await _volunteerService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}