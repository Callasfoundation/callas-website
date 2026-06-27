import logoAsset from "@/assets/callas-logo.png.asset.json";

export function Logo({ className = "h-10 w-10", showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Callas Foundation"
        className={className}
        width={64}
        height={64}
      />
      {showWordmark && (
        <div className="hidden sm:flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-wide text-ink">CALLAS</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Foundation</span>
        </div>
      )}
    </div>
  );
}
