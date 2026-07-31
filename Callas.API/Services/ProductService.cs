using Callas.API.DTOs.Products;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;
namespace Callas.API.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<IEnumerable<ProductDto>> GetAllAsync()
    {
        var products = await _productRepository.GetAllProductsAsync();
        return products.Select(ToDto);
    }

    public async Task<ProductDto?> GetByIdAsync(int id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        return product is null ? null : ToDto(product);
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        var product = new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            PurchaseUrl = dto.PurchaseUrl,
        };
        await _productRepository.AddProductAsync(product);
        await _productRepository.SaveChangesAsync();
        return ToDto(product);
    }

    public async Task<bool> UpdateAsync(int id, UpdateProductDto dto)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        if (product is null) return false;
        product.Name = dto.Name;
        product.Price = dto.Price;
        product.Description = dto.Description;
        product.ImageUrl = dto.ImageUrl;
        product.PurchaseUrl = dto.PurchaseUrl;
        return await _productRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        if (product is null) return false;
        return await _productRepository.DeleteProductAsync(product);
    }

    private static ProductDto ToDto(Product product) => new()
    {
        Id = product.Id,
        Name = product.Name,
        Price = product.Price,
        Description = product.Description,
        ImageUrl = product.ImageUrl,
        PurchaseUrl = product.PurchaseUrl,
    };
}
