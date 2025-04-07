using Microsoft.AspNetCore.Mvc;
using payment_service.Models;

namespace payment_service.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        [HttpPost]
        public IActionResult ProcessPayment([FromBody] Payment payment)
        {
            if (payment.Amount <= 0)
                return BadRequest("Invalid payment amount.");

            payment.Status = "Success"; // In a real-world app, you’d integrate with a payment provider.
            return Ok(payment);
        }
    }
}
