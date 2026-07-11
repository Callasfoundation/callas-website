using Callas.API.DTOs.Partners;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartnersController : ControllerBase
    {
        private readonly IPartnerService _partnerService;

        public PartnersController(IPartnerService partnerService)
        {
            _partnerService = partnerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetPartners()
        {
            var partners = await _partnerService.GetAllAsync();
            return Ok(partners);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPartner(int id)
        {
            var partner = await _partnerService.GetByIdAsync(id);
            return partner is null ? NotFound() : Ok(partner);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePartner(CreatePartnerDto dto)
        {
            var created = await _partnerService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetPartner), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePartner(int id, UpdatePartnerDto dto)
        {
            var updated = await _partnerService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePartner(int id)
        {
            var deleted = await _partnerService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}