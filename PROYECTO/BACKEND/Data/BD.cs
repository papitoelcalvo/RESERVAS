using Microsoft.EntityFrameworkCore;
using BACKEND.Models;

namespace BACKEND
{
    public class BD : DbContext
    {
        public BD(DbContextOptions<BD> options) : base(options)
        {
        }

        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Roles> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasKey(e => e.RoleID);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.UserID);
            });
        }
    }
}
