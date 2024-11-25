using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BACKEND;
using BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly BD _context;

        public RolesController(BD context)
        {
            _context = context;
        }

        // GET: api/Roles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Roles>>> GetRoles()
        {
            try
            {
                var roles = await _context.Roles.ToListAsync();
                if (roles == null || !roles.Any())
                {
                    return NotFound("No se encontraron roles.");
                }

                return Ok(roles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener roles: {ex.Message}");
            }
        }

        // GET: api/Roles/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Roles>> GetRole(int id)
        {
            try
            {
                var role = await _context.Roles.FindAsync(id);
                if (role == null)
                {
                    return NotFound("Rol no encontrado.");
                }

                return Ok(role);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener el rol: {ex.Message}");
            }
        }

        // POST: api/Roles
        [HttpPost]
        public async Task<ActionResult<Roles>> CreateRole(Roles newRole)
        {
            try
            {
                _context.Roles.Add(newRole);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetRole), new { id = newRole.RoleID }, newRole);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al crear el rol: {ex.Message}");
            }
        }

        // PUT: api/Roles/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRole(int id, Roles updatedRole)
        {
            if (id != updatedRole.RoleID)
            {
                return BadRequest("El ID del rol no coincide.");
            }

            _context.Entry(updatedRole).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Roles.Any(e => e.RoleID == id))
                {
                    return NotFound("Rol no encontrado.");
                }
                else
                {
                    return StatusCode(500, "Error al actualizar el rol.");
                }
            }
        }

        // DELETE: api/Roles/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(int id)
        {
            var role = await _context.Roles.FindAsync(id);
            if (role == null)
            {
                return NotFound("Rol no encontrado.");
            }

            _context.Roles.Remove(role);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
