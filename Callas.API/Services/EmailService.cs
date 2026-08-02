using System.Net;
using System.Net.Mail;
using Callas.API.Interfaces;

namespace Callas.API.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration config, ILogger<EmailService> logger)
    {
        _config = config;
        _logger = logger;
    }

    public async Task<bool> SendAsync(string toEmail, string subject, string bodyHtml)
    {
        var smtp = _config.GetSection("Smtp");
        var host = smtp["Host"];
        var portStr = smtp["Port"];
        var username = smtp["Username"];
        var password = smtp["Password"];
        var from = smtp["From"];

        if (string.IsNullOrWhiteSpace(host) || string.IsNullOrWhiteSpace(from))
        {
            _logger.LogWarning("Email not sent (Smtp:Host / Smtp:From not configured): {Subject}", subject);
            return false;
        }

        try
        {
            using var client = new SmtpClient(host, int.TryParse(portStr, out var port) ? port : 587)
            {
                EnableSsl = true,
                Credentials = string.IsNullOrWhiteSpace(username) ? null : new NetworkCredential(username, password),
            };

            using var message = new MailMessage(from, toEmail, subject, bodyHtml) { IsBodyHtml = true };
            await client.SendMailAsync(message);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send email to {ToEmail}: {Subject}", toEmail, subject);
            return false;
        }
    }
}
