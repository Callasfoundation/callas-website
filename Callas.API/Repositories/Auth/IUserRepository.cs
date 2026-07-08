using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IUserRepository
{
    Task<User?> GetByUsernameAsync(string username);
}