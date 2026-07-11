using Callas.API.DTOs.News;
using Callas.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Callas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        /// <summary>
        /// Get all news articles.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAllNews()
        {
            var articles = await _newsService.GetAllAsync();
            return Ok(articles);
        }

        /// <summary>
        /// Get a news article by ID.
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNewsById(int id)
        {
            var article = await _newsService.GetByIdAsync(id);
            return article is null ? NotFound() : Ok(article);
        }

        /// <summary>
        /// Create a new news article.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> CreateNews(CreateNewsDto dto)
        {
            var created = await _newsService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetNewsById), new { id = created.Id }, created);
        }

        /// <summary>
        /// Update an existing news article.
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, UpdateNewsDto dto)
        {
            var updated = await _newsService.UpdateAsync(id, dto);
            return updated ? NoContent() : NotFound();
        }

        /// <summary>
        /// Delete a news article.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            var deleted = await _newsService.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}