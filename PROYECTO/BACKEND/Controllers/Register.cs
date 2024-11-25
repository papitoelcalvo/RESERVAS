using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BACKEND;
using BACKEND.Models;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly BD _context;

        public RegisterController(BD context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {
            var existingUser = _context.Usuarios.FirstOrDefault(u => u.Username == request.Username);
            if (existingUser != null)
            {
                return BadRequest(new { Message = "El nombre de usuario ya existe." });
            }

            var newUser = new Usuarios
            {
                Username = request.Username,
                Password = request.Password,
                Email = request.Email,
                RoleID = 2 // Rol por defecto
            };

            _context.Usuarios.Add(newUser);
            _context.SaveChanges();

            return Ok(new { Message = "Registro exitoso.", User = newUser });
        }
    }

    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
