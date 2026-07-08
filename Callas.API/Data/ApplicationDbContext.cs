using Callas.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Callas.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<News> News => Set<News>();
    public DbSet<Event> Events => Set<Event>();
    public DbSet<Donation> Donations => Set<Donation>();
    public DbSet<Volunteer> Volunteers => Set<Volunteer>();
    public DbSet<TeamMember> TeamMembers => Set<TeamMember>();
    public DbSet<GalleryImage> GalleryImages => Set<GalleryImage>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<Partner> Partners => Set<Partner>();
    public DbSet<Programme> Programmes => Set<Programme>();
    public DbSet<Resource> Resources => Set<Resource>();
    public DbSet<ImpactStatistic> ImpactStatistics => Set<ImpactStatistic>();
    public DbSet<User> Users => Set<User>();
    public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Username)
            .IsUnique();
    }
}