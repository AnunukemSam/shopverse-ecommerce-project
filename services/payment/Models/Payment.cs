namespace payment_service.Models
{
    public class Payment
    {
        public string? Id { get; set; }          // Optional, for MongoDB ObjectId
        public string? OrderId { get; set; }     // Nullable to avoid compiler warnings
        public string? Method { get; set; }      // e.g., CreditCard, PayPal, etc.
        public string? Status { get; set; }      // e.g., Success, Failed
	public decimal Amount { get; set; }
    }
}

