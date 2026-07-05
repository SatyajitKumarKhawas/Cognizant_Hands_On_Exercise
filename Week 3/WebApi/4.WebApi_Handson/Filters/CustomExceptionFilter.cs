using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace EmployeeWebApi.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            string path = @"C:\Temp\ExceptionLog.txt";

            Directory.CreateDirectory(@"C:\Temp");

            File.AppendAllText(
                path,
                DateTime.Now + " : " +
                context.Exception.Message +
                Environment.NewLine
            );

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };
        }
    }
}