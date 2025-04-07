namespace payment_service.Models
{
    public class Payment
    {
        public string OrderId { get; set; }
        public double Amount { get; set; }
        public string Method { get; set; }
        public string Status { get; set; }
    }
}
