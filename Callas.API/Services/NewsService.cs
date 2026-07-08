using Callas.API.DTOs.News;
using Callas.API.Interfaces;
using Callas.API.Models;
using Callas.API.Repositories;

namespace Callas.API.Services;

public class NewsService : INewsService
{
    private readonly INewsRepository _newsRepository;

    public NewsService(INewsRepository newsRepository)
    {
        _newsRepository = newsRepository;
    }

    public async Task<IEnumerable<NewsDto>> GetAllAsync()
    {
        var articles = await _newsRepository.GetAllNewsAsync();
        return articles.Select(ToDto);
    }

    public async Task<NewsDto?> GetByIdAsync(int id)
    {
        var article = await _newsRepository.GetNewsByIdAsync(id);
        return article is null ? null : ToDto(article);
    }

    public async Task<NewsDto> CreateAsync(CreateNewsDto dto)
    {
        var article = new News
        {
            Title = dto.Title,
            Excerpt = dto.Excerpt,
            Body = dto.Body,
            PublishedDate = dto.PublishedDate,
            Category = dto.Category,
        };

        await _newsRepository.AddNewsAsync(article);
        await _newsRepository.SaveChangesAsync();

        return ToDto(article);
    }

    public async Task<bool> UpdateAsync(int id, UpdateNewsDto dto)
    {
        var article = await _newsRepository.GetNewsByIdAsync(id);
        if (article is null) return false;

        article.Title = dto.Title;
        article.Excerpt = dto.Excerpt;
        article.Body = dto.Body;
        article.PublishedDate = dto.PublishedDate;
        article.Category = dto.Category;

        return await _newsRepository.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var article = await _newsRepository.GetNewsByIdAsync(id);
        if (article is null) return false;

        return await _newsRepository.DeleteNewsAsync(article);
    }

    private static NewsDto ToDto(News article) => new()
    {
        Id = article.Id,
        Title = article.Title,
        Excerpt = article.Excerpt,
        Body = article.Body,
        PublishedDate = article.PublishedDate,
        Category = article.Category,
    };
}