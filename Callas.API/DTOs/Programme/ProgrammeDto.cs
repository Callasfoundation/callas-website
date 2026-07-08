// DTOs/Programmes/ProgrammeDto.cs
namespace Callas.API.DTOs.Programmes
{
    public class ProgrammeDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string VideoUrl { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
    }
}