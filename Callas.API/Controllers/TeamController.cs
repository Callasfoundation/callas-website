using Callas.API.DTOs.Team;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Callas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ITeamService _teamService;

        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTeam()
        {
            var members = await _teamService.GetAllAsync();
            return Ok(members);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMember(int id)
        {
            var member = await _teamService.GetByIdAsync(id);
            return member is null ? NotFound() : Ok(member);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMember(CreateTeamMemberDto dto)
        {
            var created = await _teamService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetMember), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(int id, UpdateTeamMemberDto dto)
        {
            var updated = await _teamService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMember(int id)
        {
            var deleted = await _teamService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}