using Callas.API.Models;

namespace Callas.API.Repositories;

public interface IContactRepository
{
    Task<IEnumerable<ContactMessage>> GetAllMessagesAsync();
    Task<ContactMessage?> GetMessageByIdAsync(int id);
    Task AddMessageAsync(ContactMessage message);
    Task<bool> DeleteMessageAsync(ContactMessage message);
    Task<bool> SaveChangesAsync();
}