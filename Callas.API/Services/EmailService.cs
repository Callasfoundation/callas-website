using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Callas.API.Interfaces;

namespace Callas.API.Services;

/// <summary>
/// Sends email via the Resend API (https://resend.com). Chosen over raw SMTP
/// because it needs only an API key — no mailbox password, no MFA/app-password
/// hassle, and no dependency on Microsoft 365's SMTP AUTH policy for the
/// organization's real inbox. Resend can deliver TO admin@callasfoundation.org.za
/// without ever needing credentials FOR that inbox.
/// </summary>
public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    private readonly ILogger<EmailService> _logger;
    private readonly HttpClient _http;

    public EmailService(IConfiguration config, ILogger<EmailService> logger, IHttpClientFactory httpClientFactory)
    {
        _config = config;
        _logger = logger;
        _http = httpClientFactory.CreateClient();
    }

    public async Task<bool> SendAsync(string toEmail, string subject, string bodyHtml)
    {
        var apiKey = _config["Resend:ApiKey"];
        var from = _config["Resend:From"];

        if (string.IsNullOrWhiteSpace(apiKey) || string.IsNullOrWhiteSpace(from))
        {
            _logger.LogWarning("Email not sent (Resend:ApiKey / Resend:From not configured): {Subject}", subject);
            return false;
        }

        try
        {
            var payload = JsonSerializer.Serialize(new { from, to = new[] { toEmail }, subject, html = bodyHtml });

            using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.resend.com/emails");
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            request.Content = new StringContent(payload, Encoding.UTF8, "application/json");

            var response = await _http.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                var body = await response.Content.ReadAsStringAsync();
                _logger.LogError("Resend API returned {Status}: {Body}", response.StatusCode, body);
                return false;
            }

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send email to {ToEmail}: {Subject}", toEmail, subject);
            return false;
        }
    }
}
