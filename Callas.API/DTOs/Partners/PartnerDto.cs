// DTOs/Partners/PartnerDto.cs
namespace Callas.API.DTOs.Partners
{
    public class PartnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string LogoUrl { get; set; } = string.Empty;
        public string Website { get; set; } = string.Empty;
    }
}