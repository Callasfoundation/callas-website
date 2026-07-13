// Services/ProgrammeService.cs
using Callas.API.DTOs.Programmes;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class ProgrammeService : IProgrammeService
{
    private readonly IProgrammeRepository _programmeRepository;

    public ProgrammeService(IProgrammeRepository programmeRepository)
    {
        _programmeRepository = programmeRepository;
    }

    public async Task<IEnumerable<ProgrammeDto>> GetAllAsync()
    {
        var programmes = await _programmeRepository.GetAllProgrammesAsync();
        return programmes.Select(ToDto);
    }

    public async Task<ProgrammeDto?> GetByIdAsync(int id)
    {
        var programme = await _programmeRepository.GetProgrammeByIdAsync(id);
        return programme is null ? null : ToDto(programme);
    }

    public async Task<ProgrammeDto> CreateAsync(CreateProgrammeDto dto)
    {
        var programme = new Programme
        {
            Title = dto.Title,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            VideoUrl = dto.VideoUrl,
            StartDate = dto.StartDate,
        };

        await _programmeRepository.AddProgrammeAsync(programme);
        await _programmeRepository.SaveChangesAsync();

        return ToDto(programme);
    }

    public async Task<bool> UpdateAsync(int id, UpdateProgrammeDto dto)
    {
        var programme = await _programmeRepository.GetProgrammeByIdAsync(id);
        if (programme is null) return false;

        programme.Title = dto.Title;
        programme.Description = dto.Description;
        programme.ImageUrl = dto.ImageUrl;
        programme.VideoUrl = dto.VideoUrl;
        programme.StartDate = dto.StartDate;

        return await _programmeRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var programme = await _programmeRepository.GetProgrammeByIdAsync(id);
        if (programme is null) return false;

        return await _programmeRepository.DeleteProgrammeAsync(programme);
    }

    private static ProgrammeDto ToDto(Programme programme) => new()
    {
        Id = programme.Id,
        Title = programme.Title,
        Description = programme.Description,
        ImageUrl = programme.ImageUrl,
        VideoUrl = programme.VideoUrl,
        StartDate = programme.StartDate,
    };
}