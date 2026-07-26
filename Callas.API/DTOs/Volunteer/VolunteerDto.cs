// DTOs/Volunteers/VolunteerDto.cs
namespace Callas.API.DTOs.Volunteers
{
    public class VolunteerDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Track { get; set; } = string.Empty;
        public string AvailableDays { get; set; } = string.Empty;
        public string Note { get; set; } = string.Empty;
    }
}