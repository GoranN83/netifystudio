import { cn } from "@/lib/utils";

export function BrowserFrame({
  url,
  koncept = false,
  tone = "dark",
  className,
  children,
}: {
  url: string;
  koncept?: boolean;
  tone?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg",
        dark
          ? "bg-[#14120e] ring-1 ring-foreground/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]"
          : "bg-white ring-1 ring-ink/10 shadow-[0_30px_80px_-30px_rgba(23,20,15,0.35)]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4 border-b px-4 py-3",
          dark ? "border-hairline" : "border-ink-hairline"
        )}
      >
        <div className="flex gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "size-2.5 rounded-full",
                dark ? "bg-foreground/20" : "bg-ink/15"
              )}
            />
          ))}
        </div>
        <span
          className={cn(
            "font-mono text-xs tracking-wide",
            dark ? "text-muted" : "text-ink-muted"
          )}
        >
          {url}
        </span>
        {koncept && (
          <span
            className={cn(
              "ml-auto rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]",
              dark
                ? "border-hairline text-muted"
                : "border-ink-hairline text-ink-muted"
            )}
          >
            Koncept
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
