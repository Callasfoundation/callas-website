using System.Collections.Concurrent;

namespace Callas.API.Services;

/// <summary>
/// Remembers JWT ids (jti) that were invalidated by logout, until the token
/// would have expired anyway. In-memory: entries are lost on restart, which is
/// acceptable because tokens are short-lived (see Jwt:ExpiryMinutes).
/// </summary>
public class TokenRevocationService
{
    private readonly ConcurrentDictionary<string, DateTime> _revoked = new();

    public void Revoke(string? jti, DateTime expiresUtc)
    {
        if (string.IsNullOrEmpty(jti)) return;
        Purge();
        _revoked[jti] = expiresUtc;
    }

    public bool IsRevoked(string? jti) => !string.IsNullOrEmpty(jti) && _revoked.ContainsKey(jti);

    private void Purge()
    {
        var now = DateTime.UtcNow;
        foreach (var kv in _revoked)
            if (kv.Value < now) _revoked.TryRemove(kv.Key, out _);
    }
}
