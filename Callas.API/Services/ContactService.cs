using Callas.API.DTOs.Contact;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class ContactService : IContactService
{
    private readonly IContactRepository _contactRepository;
    private readonly IEmailService _emailService;
    private readonly IConfiguration _config;

    public ContactService(IContactRepository contactRepository, IEmailService emailService, IConfiguration config)
    {
        _contactRepository = contactRepository;
        _emailService = emailService;
        _config = config;
    }

    public async Task<IEnumerable<ContactMessageDto>> GetAllAsync()
    {
        var messages = await _contactRepository.GetAllMessagesAsync();
        return messages.Select(ToDto);
    }

    public async Task<ContactMessageDto?> GetByIdAsync(int id)
    {
        var message = await _contactRepository.GetMessageByIdAsync(id);
        return message is null ? null : ToDto(message);
    }

    public async Task<ContactMessageDto> CreateAsync(CreateContactMessageDto dto)
    {
        var message = new ContactMessage
        {
            Name = dto.Name,
            Email = dto.Email,
            Subject = dto.Subject,
            Category = dto.Category,
            Message = dto.Message,
            DateSubmitted = DateTime.UtcNow,
            IsRead = false,
        };

        await _contactRepository.AddMessageAsync(message);
        await _contactRepository.SaveChangesAsync();

        var adminEmail = _config["AdminNotificationEmail"];
        if (!string.IsNullOrWhiteSpace(adminEmail))
        {
            var body = $"""
                <p><strong>{System.Net.WebUtility.HtmlEncode(message.Category)}</strong> from {System.Net.WebUtility.HtmlEncode(message.Name)} ({System.Net.WebUtility.HtmlEncode(message.Email)})</p>
                <p><strong>Subject:</strong> {System.Net.WebUtility.HtmlEncode(message.Subject)}</p>
                <p>{System.Net.WebUtility.HtmlEncode(message.Message).Replace("\n", "<br/>")}</p>
                <p style="margin-top:16px;color:#666;font-size:13px;">Reply via the admin panel at /admin/messages</p>
                """;
            await _emailService.SendAsync(adminEmail, $"New message: {message.Subject}", body);
        }

        return ToDto(message);
    }

    public async Task<bool> UpdateReadStatusAsync(int id, UpdateContactMessageStatusDto dto)
    {
        var message = await _contactRepository.GetMessageByIdAsync(id);
        if (message is null) return false;

        message.IsRead = dto.IsRead;
        return await _contactRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var message = await _contactRepository.GetMessageByIdAsync(id);
        if (message is null) return false;

        return await _contactRepository.DeleteMessageAsync(message);
    }

    private static ContactMessageDto ToDto(ContactMessage message) => new()
    {
        Id = message.Id,
        Name = message.Name,
        Email = message.Email,
        Subject = message.Subject,
        Category = message.Category,
        Message = message.Message,
        DateSubmitted = message.DateSubmitted,
        IsRead = message.IsRead,
    };
}
