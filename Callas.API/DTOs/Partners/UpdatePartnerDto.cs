
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Partners
{
    public class UpdatePartnerDto
    {
        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, Url]
        public string LogoUrl { get; set; } = string.Empty;

        [Url]
        public string Website { get; set; } = string.Empty;
    }
}