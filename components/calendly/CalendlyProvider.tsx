"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { PopupModal } from "react-calendly";
import { site } from "@/data/site";

type CalendlyContextValue = {
  openBooking: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error("useCalendly must be used within CalendlyProvider");
  }
  return ctx;
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  const openBooking = useCallback(() => setModalOpen(true), []);

  return (
    <CalendlyContext.Provider value={{ openBooking }}>
      {children}
      {rootElement && (
        <PopupModal
          url={site.contact.calendlyUrl}
          rootElement={rootElement}
          open={modalOpen}
          onModalClose={() => setModalOpen(false)}
        />
      )}
    </CalendlyContext.Provider>
  );
}
