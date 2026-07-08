using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Callas.API.Models;

public class Donation
{
    public int Id { get; set; }

    public string DonorName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    [Column(TypeName = "decimal(18,2)")]
    public decimal Amount { get; set; }

    public string Frequency { get; set; } = string.Empty;

    public DateTime DonationDate { get; set; }
}