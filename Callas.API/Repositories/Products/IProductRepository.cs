using Callas.API.Models;
namespace Callas.API.Repositories;

public interface IProductRepository
{
    Task<IEnumerable<Product>> GetAllProductsAsync();
    Task<Product?> GetProductByIdAsync(int id);
    Task AddProductAsync(Product product);
    Task<bool> DeleteProductAsync(Product product);
    Task<bool> SaveChangesAsync();
}
