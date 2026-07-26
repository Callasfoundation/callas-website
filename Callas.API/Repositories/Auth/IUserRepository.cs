using Callas.API.Models;
namespace Callas.API.Repositories;
public interface IUserRepository
{
    Task<User?> GetByUsernameAsync(string username);
    Task<User?> GetByIdAsync(int id);
    Task<bool> SaveChangesAsync();
}