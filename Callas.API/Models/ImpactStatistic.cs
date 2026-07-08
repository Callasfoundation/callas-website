using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models;

public class ImpactStatistic
{
    public int Id { get; set; }

    public string Label { get; set; } = string.Empty;

    public int Value { get; set; }

    public string Suffix { get; set; } = string.Empty;
}