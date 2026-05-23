import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider",
            light ? "text-amber-300" : "text-accent",
          )}
        >
          <span
            className={cn(
              "h-1 w-8 rounded-full",
              light
                ? "bg-gradient-to-r from-amber-400 to-orange-400"
                : "bg-gradient-to-r from-accent to-accent-warm",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-brand",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-blue-100/90" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
