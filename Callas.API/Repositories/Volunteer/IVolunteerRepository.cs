// Repositories/IVolunteerRepository.cs
using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IVolunteerRepository
{
    Task<IEnumerable<Volunteer>> GetAllVolunteersAsync();
    Task<Volunteer?> GetVolunteerByIdAsync(int id);
    Task AddVolunteerAsync(Volunteer volunteer);
    Task<bool> DeleteVolunteerAsync(Volunteer volunteer);
    Task<bool> SaveChangesAsync();
}