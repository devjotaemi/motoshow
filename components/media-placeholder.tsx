export function MediaPlaceholder({
  token,
  label,
  className = ""
}: {
  token: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`media-placeholder relative overflow-hidden border border-white/10 ${className}`}
    >
      {/* Replace this placeholder with the real asset: [${token}] */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.13),transparent)] bg-[length:200%_100%] animate-shimmer" />
      <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-dark-950/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-200">
        {token}
      </div>
    </div>
  );
}
