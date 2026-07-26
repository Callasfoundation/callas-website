using Callas.API.DTOs.Impact;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImpactController : ControllerBase
    {
        private readonly IImpactService _impactService;

        public ImpactController(IImpactService impactService)
        {
            _impactService = impactService;
        }

        [HttpGet]
        public async Task<IActionResult> GetStatistics()
        {
            var stats = await _impactService.GetAllAsync();
            return Ok(stats);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStatistic(int id)
        {
            var stat = await _impactService.GetByIdAsync(id);
            return stat is null ? NotFound() : Ok(stat);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStatistic(CreateImpactStatisticDto dto)
        {
            var created = await _impactService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetStatistic), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStatistic(int id, UpdateImpactStatisticDto dto)
        {
            var updated = await _impactService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatistic(int id)
        {
            var deleted = await _impactService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}