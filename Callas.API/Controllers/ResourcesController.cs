using Callas.API.DTOs.Resources;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourcesController : ControllerBase
    {
        private readonly IResourceService _resourceService;

        public ResourcesController(IResourceService resourceService)
        {
            _resourceService = resourceService;
        }

        [HttpGet]
        public async Task<IActionResult> GetResources()
        {
            var resources = await _resourceService.GetAllAsync();
            return Ok(resources);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetResource(int id)
        {
            var resource = await _resourceService.GetByIdAsync(id);
            return resource is null ? NotFound() : Ok(resource);
        }

        [HttpPost]
        public async Task<IActionResult> CreateResource(CreateResourceDto dto)
        {
            var created = await _resourceService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetResource), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResource(int id, UpdateResourceDto dto)
        {
            var updated = await _resourceService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResource(int id)
        {
            var deleted = await _resourceService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}