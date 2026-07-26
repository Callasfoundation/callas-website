// Services/PartnerService.cs
using Callas.API.DTOs.Partners;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class PartnerService : IPartnerService
{
    private readonly IPartnerRepository _partnerRepository;

    public PartnerService(IPartnerRepository partnerRepository)
    {
        _partnerRepository = partnerRepository;
    }

    public async Task<IEnumerable<PartnerDto>> GetAllAsync()
    {
        var partners = await _partnerRepository.GetAllPartnersAsync();
        return partners.Select(ToDto);
    }

    public async Task<PartnerDto?> GetByIdAsync(int id)
    {
        var partner = await _partnerRepository.GetPartnerByIdAsync(id);
        return partner is null ? null : ToDto(partner);
    }

    public async Task<PartnerDto> CreateAsync(CreatePartnerDto dto)
    {
        var partner = new Partner
        {
            Name = dto.Name,
            LogoUrl = dto.LogoUrl,
            Website = dto.Website,
        };

        await _partnerRepository.AddPartnerAsync(partner);
        await _partnerRepository.SaveChangesAsync();

        return ToDto(partner);
    }

    public async Task<bool> UpdateAsync(int id, UpdatePartnerDto dto)
    {
        var partner = await _partnerRepository.GetPartnerByIdAsync(id);
        if (partner is null) return false;

        partner.Name = dto.Name;
        partner.LogoUrl = dto.LogoUrl;
        partner.Website = dto.Website;

        return await _partnerRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var partner = await _partnerRepository.GetPartnerByIdAsync(id);
        if (partner is null) return false;

        return await _partnerRepository.DeletePartnerAsync(partner);
    }

    private static PartnerDto ToDto(Partner partner) => new()
    {
        Id = partner.Id,
        Name = partner.Name,
        LogoUrl = partner.LogoUrl,
        Website = partner.Website,
    };
}