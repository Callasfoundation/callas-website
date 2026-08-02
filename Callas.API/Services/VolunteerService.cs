// Services/VolunteerService.cs
using Callas.API.DTOs.Volunteers;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class VolunteerService : IVolunteerService
{
    private readonly IVolunteerRepository _volunteerRepository;
    private readonly IEmailService _emailService;
    private readonly IConfiguration _config;

    public VolunteerService(IVolunteerRepository volunteerRepository, IEmailService emailService, IConfiguration config)
    {
        _volunteerRepository = volunteerRepository;
        _emailService = emailService;
        _config = config;
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
            DateSubmitted = DateTime.UtcNow,
            IsRead = false,
        };

        await _volunteerRepository.AddVolunteerAsync(volunteer);
        await _volunteerRepository.SaveChangesAsync();

        var adminEmail = _config["AdminNotificationEmail"];
        if (!string.IsNullOrWhiteSpace(adminEmail))
        {
            var body = $"""
                <p><strong>New volunteer sign-up:</strong> {System.Net.WebUtility.HtmlEncode(volunteer.Name)} ({System.Net.WebUtility.HtmlEncode(volunteer.Email)})</p>
                <p><strong>Phone:</strong> {System.Net.WebUtility.HtmlEncode(volunteer.Phone)}</p>
                <p><strong>Interests:</strong> {System.Net.WebUtility.HtmlEncode(volunteer.Track)}</p>
                <p><strong>Available:</strong> {System.Net.WebUtility.HtmlEncode(volunteer.AvailableDays)}</p>
                {(string.IsNullOrWhiteSpace(volunteer.Note) ? "" : $"<p>{System.Net.WebUtility.HtmlEncode(volunteer.Note)}</p>")}
                <p style="margin-top:16px;color:#666;font-size:13px;">View in the admin panel at /admin/volunteers</p>
                """;
            await _emailService.SendAsync(adminEmail, $"New volunteer sign-up: {volunteer.Name}", body);
        }

        return ToDto(volunteer);
    }

    public async Task<bool> UpdateReadStatusAsync(int id, UpdateVolunteerStatusDto dto)
    {
        var volunteer = await _volunteerRepository.GetVolunteerByIdAsync(id);
        if (volunteer is null) return false;

        volunteer.IsRead = dto.IsRead;
        return await _volunteerRepository.SaveChangesAsync();
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
        DateSubmitted = volunteer.DateSubmitted,
        IsRead = volunteer.IsRead,
    };
}
