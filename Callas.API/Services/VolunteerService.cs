// Services/VolunteerService.cs
using Callas.API.DTOs.Volunteers;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class VolunteerService : IVolunteerService
{
    private readonly IVolunteerRepository _volunteerRepository;

    public VolunteerService(IVolunteerRepository volunteerRepository)
    {
        _volunteerRepository = volunteerRepository;
    }

    public async Task<IEnumerable<VolunteerDto>> GetAllAsync()
    {
        var volunteers = await _volunteerRepository.GetAllVolunteersAsync();
        return volunteers.Select(ToDto);
    }

    public async Task<VolunteerDto?> GetByIdAsync(int id)
    {
        var volunteer = await _volunteerRepository.GetVolunteerByIdAsync(id);
        return volunteer is null ? null : ToDto(volunteer);
    }

    public async Task<VolunteerDto> CreateAsync(CreateVolunteerDto dto)
    {
        var volunteer = new Volunteer
        {
            Name = dto.Name,
            Email = dto.Email,
            Phone = dto.Phone,
            Track = dto.Track,
            AvailableDays = dto.AvailableDays,
            Note = dto.Note,
        };

        await _volunteerRepository.AddVolunteerAsync(volunteer);
        await _volunteerRepository.SaveChangesAsync();

        return ToDto(volunteer);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var volunteer = await _volunteerRepository.GetVolunteerByIdAsync(id);
        if (volunteer is null) return false;

        return await _volunteerRepository.DeleteVolunteerAsync(volunteer);
    }

    private static VolunteerDto ToDto(Volunteer volunteer) => new()
    {
        Id = volunteer.Id,
        Name = volunteer.Name,
        Email = volunteer.Email,
        Phone = volunteer.Phone,
        Track = volunteer.Track,
        AvailableDays = volunteer.AvailableDays,
        Note = volunteer.Note,
    };
}