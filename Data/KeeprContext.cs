using keepr.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace keepr
{
    public class KeeprContext : IdentityDbContext<User>
    {
        // DONT FORGET TO REGISTER YOUR MODELS TO THE DATABASE
        new DbSet<User> Users { get; set; }
        DbSet<Keep> Keeps { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=keeprdb.database.windows.net;Database=tylersKeeps;User ID=rhinehart22;Password=100%AppleJuice;Trusted_Connection=False;Encrypt=True");
        }
        public KeeprContext(DbContextOptions<KeeprContext> options) : base(options)
        {
            // Database.EnsureCreated();
            // Database.Migrate();
        }
    }
}
// "Server=studentprojects.database.windows.net;Database=tylersKeeps;User ID=codeworks@studentprojects;Password=Applejuic3;Trusted_Connection=False;Encrypt=True"