using Callas.API.DTOs.Contact;

namespace Callas.API.Interfaces;

public interface IContactService
{
    Task<IEnumerable<ContactMessageDto>> GetAllAsync();
    Task<ContactMessageDto?> GetByIdAsync(int id);
    Task<ContactMessageDto> CreateAsync(CreateContactMessageDto dto);
    Task<bool> UpdateReadStatusAsync(int id, UpdateContactMessageStatusDto dto);
    Task<bool> DeleteAsync(int id);
}