using Callas.API.DTOs.Donations;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class DonationsController : ControllerBase
    {
        private readonly IDonationService _donationService;

        public DonationsController(IDonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetDonations()
        {
            var donations = await _donationService.GetAllAsync();
            return Ok(donations);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDonation(int id)
        {
            var donation = await _donationService.GetByIdAsync(id);
            return donation is null ? NotFound() : Ok(donation);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateDonation(CreateDonationDto dto)
        {
            var created = await _donationService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetDonation), new { id = created.Id }, created);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDonation(int id)
        {
            var deleted = await _donationService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}