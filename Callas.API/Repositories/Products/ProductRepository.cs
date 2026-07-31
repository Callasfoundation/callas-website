using Callas.API.Data;
using Callas.API.Models;
using Microsoft.EntityFrameworkCore;
namespace Callas.API.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;

    public ProductRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Product>> GetAllProductsAsync() => await _context.Products.ToListAsync();

    public async Task<Product?> GetProductByIdAsync(int id) => await _context.Products.FindAsync(id);

    public async Task AddProductAsync(Product product) => await _context.Products.AddAsync(product);

    public async Task<bool> DeleteProductAsync(Product product)
    {
        _context.Products.Remove(product);
        return await SaveChangesAsync();
    }

    public async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync()) > 0;
}
