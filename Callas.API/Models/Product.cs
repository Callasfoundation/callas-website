using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Price { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    public string PurchaseUrl { get; set; } = string.Empty;
}
