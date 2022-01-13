using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Models
{
    public class AppDbContext : DbContext, IUserContext
    {
         public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<UserModel> Users { get; set; }
        
    }
}