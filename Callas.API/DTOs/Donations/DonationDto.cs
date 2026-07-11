// DTOs/Donations/DonationDto.cs
namespace Callas.API.DTOs.Donations
{
    public class DonationDto
    {
        public int Id { get; set; }
        public string DonorName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Frequency { get; set; } = string.Empty;
        public DateTime DonationDate { get; set; }
    }
}