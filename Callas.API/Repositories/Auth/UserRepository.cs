using Callas.API.Data;
using Callas.API.Models;
using Callas.API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User?> GetByUsernameAsync(string username) =>
        await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
}