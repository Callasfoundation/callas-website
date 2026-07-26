using System.ComponentModel.DataAnnotations;
namespace Callas.API.Models
{
    public class RefreshToken
    {
        public int Id { get; set; }
        public int UserId { get; set; }

    }
}
