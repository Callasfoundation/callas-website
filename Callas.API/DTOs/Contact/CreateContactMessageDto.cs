// DTOs/Contact/CreateContactMessageDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Contact
{
    public class CreateContactMessageDto
    {
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, MaxLength(200)]
        public string Subject { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Category { get; set; } = string.Empty;

        [Required, MaxLength(2000)]
        public string Message { get; set; } = string.Empty;
    }
}