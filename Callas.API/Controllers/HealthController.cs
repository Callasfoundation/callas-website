using Microsoft.AspNetCore.Mvc;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/health")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok(new { ok = true });
    }
}