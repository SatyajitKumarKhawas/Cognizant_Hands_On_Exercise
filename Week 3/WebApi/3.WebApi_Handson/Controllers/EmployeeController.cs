using EmployeeWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using EmployeeWebApi.Filters;
namespace EmployeeWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>()
            {
                new Employee()
                {
                    Id = 1,
                    Name = "Akanksha",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(1998,5,15),

                    Department = new Department()
                    {
                        Id = 101,
                        Name = "IT"
                    },

                    Skills = new List<Skill>()
                    {
                        new Skill(){ Id = 1, Name = "C#" },
                        new Skill(){ Id = 2, Name = "SQL" }
                    }
                },

                new Employee()
                {
                    Id = 2,
                    Name = "Mital",
                    Salary = 65000,
                    Permanent = false,
                    DateOfBirth = new DateTime(1997,8,20),

                    Department = new Department()
                    {
                        Id = 102,
                        Name = "HR"
                    },

                    Skills = new List<Skill>()
                    {
                        new Skill(){ Id = 3, Name = "Java" },
                        new Skill(){ Id = 4, Name = "Angular" }
                    }
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            return Ok(employee);
        }
    }
}