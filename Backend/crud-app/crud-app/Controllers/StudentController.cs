using crud_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace crud_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentContext _studentContext;
        public StudentController(StudentContext studentContext)
        {
            _studentContext = studentContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudent()
        {
            var student = await _studentContext.Students.ToListAsync();
            return Ok(student);
        }

    }

}
