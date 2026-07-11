// Interfaces/IProgrammeService.cs
using Callas.API.DTOs.Programmes;

namespace Callas.API.Interfaces;

public interface IProgrammeService
{
    Task<IEnumerable<ProgrammeDto>> GetAllAsync();
    Task<ProgrammeDto?> GetByIdAsync(int id);
    Task<ProgrammeDto> CreateAsync(CreateProgrammeDto dto);
    Task<bool> UpdateAsync(int id, UpdateProgrammeDto dto);
    Task<bool> DeleteAsync(int id);
}