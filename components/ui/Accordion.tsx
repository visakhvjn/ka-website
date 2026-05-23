"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  defaultOpen?: string;
};

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className="divide-y divide-border bg-surface-elevated">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const barColors = [
          "bg-accent",
          "bg-accent-warm",
          "bg-accent-rose",
          "bg-accent-green",
        ];
        return (
          <div key={item.id} className="relative">
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 w-1 transition-opacity",
                barColors[index % barColors.length],
                isOpen ? "opacity-100" : "opacity-40",
              )}
            />
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 pl-6 pr-6 text-left transition-colors hover:bg-surface-muted"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-semibold text-brand">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-accent transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pl-6 text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
