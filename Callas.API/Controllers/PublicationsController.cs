using Callas.API.DTOs.Publications;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PublicationsController : ControllerBase
    {
        private readonly IPublicationService _publicationService;

        public PublicationsController(IPublicationService publicationService)
        {
            _publicationService = publicationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPublications()
            => Ok(await _publicationService.GetAllAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPublicationById(int id)
        {
            var publication = await _publicationService.GetByIdAsync(id);
            return publication is null ? NotFound() : Ok(publication);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> CreatePublication(CreatePublicationDto dto)
        {
            var created = await _publicationService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetPublicationById), new { id = created.Id }, created);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePublication(int id, UpdatePublicationDto dto)
        {
            var updated = await _publicationService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublication(int id)
        {
            var deleted = await _publicationService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}
