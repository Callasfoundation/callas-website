using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Products
{
    public class UpdateProductDto
    {
        [Required, MaxLength(150)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Price { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        [MaxLength(500)]
        public string ImageUrl { get; set; } = string.Empty;

        [MaxLength(500)]
        public string PurchaseUrl { get; set; } = string.Empty;
    }
}
