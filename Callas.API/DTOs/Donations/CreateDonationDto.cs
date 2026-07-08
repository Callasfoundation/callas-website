// DTOs/Donations/CreateDonationDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Donations
{
    public class CreateDonationDto
    {
        [Required, MaxLength(100)]
        public string DonorName { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Range(1, 1_000_000)]
        public decimal Amount { get; set; }

        [Required, MaxLength(20)]
        public string Frequency { get; set; } = string.Empty;
    }
}