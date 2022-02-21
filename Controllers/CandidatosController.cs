using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ElaTrampa.Data;
using ElaTrampa.Models;

namespace ElaTrampa.Controllers
{
    public class CandidatosController : Controller
    {
        private readonly EmpregoContext _context;

        public CandidatosController(EmpregoContext context)
        {
            _context = context;
        }

        // GET: Candidatos
        public async Task<IActionResult> Index()
        {
            return View(await _context.Candidatos.ToListAsync());
        }

        // GET: Candidatos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var candidato = await _context.Candidatos
                .Include(c => c.Vagas)
                    .ThenInclude(v => v.Empresa)
                .AsNoTracking()
                .FirstOrDefaultAsync(m => m.ID == id);
            if (candidato == null)
            {
                return NotFound();
            }

            return View(candidato);
        }

        // GET: Candidatos/Create
        public IActionResult Create()
        {
            return View();
        }

        // Get: Candidatos/Cadastro

        public IActionResult Cadastro()
        {
            return View();
        }

        // Get: Candidatos/Contato

        public IActionResult Contato()
        {
            return View();
        }

        // POST: Candidatos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Nome,CPF,Email,Telefone")] Candidato candidato)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(candidato);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
            }
            catch (DbUpdateException /* ex */)
            {
                // Log do erro
                ModelState.AddModelError("", "Não foi possivel salvar as mudanças." + " Tente novamente, se os problemas continuarem " +
                    "Entre em contato com o seu Administrador");
            }
            return View(candidato);
        }

        // GET: Candidatos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var candidato = await _context.Candidatos.FindAsync(id);
            if (candidato == null)
            {
                return NotFound();
            }
            return View(candidato);
        }

        // POST: Candidatos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Nome,CPF,Email,Telefone")] Candidato candidato)
        {
            if (id != candidato.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(candidato);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CandidatoExists(candidato.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(candidato);
        }

        // GET: Candidatos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var candidato = await _context.Candidatos
                .FirstOrDefaultAsync(m => m.ID == id);
            if (candidato == null)
            {
                return NotFound();
            }

            return View(candidato);
        }

        // POST: Candidatos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var candidato = await _context.Candidatos.FindAsync(id);
            _context.Candidatos.Remove(candidato);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CandidatoExists(int id)
        {
            return _context.Candidatos.Any(e => e.ID == id);
        }
    }
}
