import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  nameClassName?: string;
  tagline?: string;
  taglineClassName?: string;
  showName?: boolean;
  showTagline?: boolean;
  link?: boolean;
};

export function BrandMark({
  className,
  imageClassName,
  nameClassName,
  tagline,
  taglineClassName,
  showName = true,
  showTagline = true,
  link = false,
}: BrandMarkProps) {
  const content = (
    <>
      <Image
        src="/logo.png"
        alt={site.name}
        width={200}
        height={200}
        priority={link}
        className={cn(
          "h-12 w-auto shrink-0 rounded-lg bg-white p-1 sm:h-14",
          imageClassName,
        )}
      />
      {showName && (
        <div className="min-w-0 flex flex-col gap-0.5">
          <span
            className={cn(
              "font-display font-bold leading-tight tracking-tight",
              nameClassName,
            )}
          >
            {site.shortName}
          </span>
          {showTagline && (
            <span
              className={cn(
                "text-[11px] leading-snug sm:text-xs",
                taglineClassName,
              )}
            >
              {tagline ?? site.tagline}
            </span>
          )}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link
        href="/"
        className={cn("flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
      {content}
    </div>
  );
}
