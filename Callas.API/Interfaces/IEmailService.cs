namespace Callas.API.Interfaces;

public interface IEmailService
{
    /// <summary>
    /// Sends an email. Implementations should not throw on failure — callers
    /// treat email as a best-effort notification, never a reason to fail
    /// the request that triggered it (e.g. a volunteer sign-up must still
    /// save even if the SMTP server is down).
    /// </summary>
    Task<bool> SendAsync(string toEmail, string subject, string bodyHtml);
}
