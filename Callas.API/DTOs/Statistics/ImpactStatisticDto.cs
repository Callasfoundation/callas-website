// DTOs/Impact/ImpactStatisticDto.cs
namespace Callas.API.DTOs.Impact
{
    public class ImpactStatisticDto
    {
        public int Id { get; set; }
        public string Label { get; set; } = string.Empty;
        public int Value { get; set; }
        public string Suffix { get; set; } = string.Empty;
    }
}