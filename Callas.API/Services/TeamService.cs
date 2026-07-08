// Services/TeamService.cs
using Callas.API.DTOs.Team;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class TeamService : ITeamService
{
    private readonly ITeamRepository _teamRepository;

    public TeamService(ITeamRepository teamRepository)
    {
        _teamRepository = teamRepository;
    }

    public async Task<IEnumerable<TeamMemberDto>> GetAllAsync()
    {
        var members = await _teamRepository.GetAllMembersAsync();
        return members.Select(ToDto);
    }

    public async Task<TeamMemberDto?> GetByIdAsync(int id)
    {
        var member = await _teamRepository.GetMemberByIdAsync(id);
        return member is null ? null : ToDto(member);
    }

    public async Task<TeamMemberDto> CreateAsync(CreateTeamMemberDto dto)
    {
        var member = new TeamMember
        {
            Name = dto.Name,
            Role = dto.Role,
            Email = dto.Email,
        };

        await _teamRepository.AddMemberAsync(member);
        await _teamRepository.SaveChangesAsync();

        return ToDto(member);
    }

    public async Task<bool> UpdateAsync(int id, UpdateTeamMemberDto dto)
    {
        var member = await _teamRepository.GetMemberByIdAsync(id);
        if (member is null) return false;

        member.Name = dto.Name;
        member.Role = dto.Role;
        member.Email = dto.Email;

        return await _teamRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var member = await _teamRepository.GetMemberByIdAsync(id);
        if (member is null) return false;

        return await _teamRepository.DeleteMemberAsync(member);
    }

    private static TeamMemberDto ToDto(TeamMember member) => new()
    {
        Id = member.Id,
        Name = member.Name,
        Role = member.Role,
        Email = member.Email,
    };
}