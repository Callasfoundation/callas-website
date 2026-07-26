using Callas.API.DTOs.Gallery;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GalleryController : ControllerBase
    {
        private readonly IGalleryService _galleryService;

        public GalleryController(IGalleryService galleryService)
        {
            _galleryService = galleryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetGallery()
        {
            var images = await _galleryService.GetAllAsync();
            return Ok(images);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImage(int id)
        {
            var image = await _galleryService.GetByIdAsync(id);
            return image is null ? NotFound() : Ok(image);
        }

        [HttpPost]
        public async Task<IActionResult> UploadImage(CreateGalleryImageDto dto)
        {
            var created = await _galleryService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetImage), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateImage(int id, UpdateGalleryImageDto dto)
        {
            var updated = await _galleryService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImage(int id)
        {
            var deleted = await _galleryService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}