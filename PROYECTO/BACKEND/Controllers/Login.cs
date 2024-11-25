using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BACKEND;
using BACKEND.Models;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly BD _context;

        public LoginController(BD context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var usuario = _context.Usuarios.FirstOrDefault(u => u.Username == request.Username && u.Password == request.Password);
            if (usuario != null)
            {
                return Ok(new { Message = "Inicio de sesión exitoso.", User = usuario, Role = usuario.RoleID });
            }

            return Unauthorized(new { Message = "Credenciales incorrectas." });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
