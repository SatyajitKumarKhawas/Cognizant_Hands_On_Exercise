using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace EmployeeWebApi.Filters
{
    public class CustomAuthFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.HttpContext.Request.Headers.ContainsKey("Authorization"))
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401,
                    Content = "Invalid request - No Auth token"
                };

                return;
            }

            string token = context.HttpContext.Request.Headers["Authorization"];

            if (!token.StartsWith("Bearer "))
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401,
                    Content = "Invalid request - Bearer token missing"
                };

                return;
            }

            base.OnActionExecuting(context);
        }
    }
}