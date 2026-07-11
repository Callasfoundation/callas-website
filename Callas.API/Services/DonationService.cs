// Services/DonationService.cs
using Callas.API.DTOs.Donations;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class DonationService : IDonationService
{
    private readonly IDonationRepository _donationRepository;

    public DonationService(IDonationRepository donationRepository)
    {
        _donationRepository = donationRepository;
    }

    public async Task<IEnumerable<DonationDto>> GetAllAsync()
    {
        var donations = await _donationRepository.GetAllDonationsAsync();
        return donations.Select(ToDto);
    }

    public async Task<DonationDto?> GetByIdAsync(int id)
    {
        var donation = await _donationRepository.GetDonationByIdAsync(id);
        return donation is null ? null : ToDto(donation);
    }

    public async Task<DonationDto> CreateAsync(CreateDonationDto dto)
    {
        var donation = new Donation
        {
            DonorName = dto.DonorName,
            Email = dto.Email,
            Amount = dto.Amount,
            Frequency = dto.Frequency,
            DonationDate = DateTime.UtcNow,
        };

        await _donationRepository.AddDonationAsync(donation);
        await _donationRepository.SaveChangesAsync();

        return ToDto(donation);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var donation = await _donationRepository.GetDonationByIdAsync(id);
        if (donation is null) return false;

        return await _donationRepository.DeleteDonationAsync(donation);
    }

    private static DonationDto ToDto(Donation donation) => new()
    {
        Id = donation.Id,
        DonorName = donation.DonorName,
        Email = donation.Email,
        Amount = donation.Amount,
        Frequency = donation.Frequency,
        DonationDate = donation.DonationDate,
    };
}