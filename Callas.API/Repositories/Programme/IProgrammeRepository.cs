// Repositories/IProgrammeRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IProgrammeRepository
{
    Task<IEnumerable<Programme>> GetAllProgrammesAsync();
    Task<Programme?> GetProgrammeByIdAsync(int id);
    Task AddProgrammeAsync(Programme programme);
    Task<bool> DeleteProgrammeAsync(Programme programme);
    Task<bool> SaveChangesAsync();
}