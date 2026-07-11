using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models
{
    public class Programme
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string VideoUrl { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
    }
}
