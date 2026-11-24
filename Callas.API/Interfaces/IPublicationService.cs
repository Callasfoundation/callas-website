using Callas.API.DTOs.Publications;

namespace Callas.API.Interfaces
{
    public interface IPublicationService
    {
        Task<IEnumerable<PublicationDto>> GetAllAsync();
        Task<PublicationDto?> GetByIdAsync(int id);
        Task<PublicationDto> CreateAsync(CreatePublicationDto dto);
        Task<bool> UpdateAsync(int id, UpdatePublicationDto dto);
        Task<bool> DeleteAsync(int id);
    }
}
