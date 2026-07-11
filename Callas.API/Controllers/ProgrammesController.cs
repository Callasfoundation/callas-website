using Callas.API.DTOs.Programmes;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgrammesController : ControllerBase
    {
        private readonly IProgrammeService _programmeService;

        public ProgrammesController(IProgrammeService programmeService)
        {
            _programmeService = programmeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProgrammes()
        {
            var programmes = await _programmeService.GetAllAsync();
            return Ok(programmes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProgramme(int id)
        {
            var programme = await _programmeService.GetByIdAsync(id);
            return programme is null ? NotFound() : Ok(programme);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProgramme(CreateProgrammeDto dto)
        {
            var created = await _programmeService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetProgramme), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProgramme(int id, UpdateProgrammeDto dto)
        {
            var updated = await _programmeService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgramme(int id)
        {
            var deleted = await _programmeService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}