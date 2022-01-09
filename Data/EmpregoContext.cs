using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ElaTrampa.Models;

namespace ElaTrampa.Data
{
    public class EmpregoContext :  DbContext
    {
        public EmpregoContext(DbContextOptions<EmpregoContext> options) : base(options)
        {

        }

        public DbSet<Vaga> Vagas { get; set; }
        public DbSet<Empresa> Empresas { get; set; }
        public DbSet<Candidato> Candidatos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vaga>().ToTable("Vaga");
            modelBuilder.Entity<Empresa>().ToTable("Empresa");
            modelBuilder.Entity<Candidato>().ToTable("Candidato");
        }

    }
}
