// DTOs/Impact/CreateImpactStatisticDto.cs
using System.ComponentModel.DataAnnotations;

namespace Callas.API.DTOs.Impact
{
    public class UpdateImpactStatisticDto
    {
        [Required, MaxLength(100)]
        public string Label { get; set; } = string.Empty;

        [Range(0, int.MaxValue)]
        public int Value { get; set; }

        [MaxLength(20)]
        public string Suffix { get; set; } = string.Empty;
    }
}