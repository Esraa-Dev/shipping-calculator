import { createContext, useState } from "react";
import type { QuoteFormData } from "../schemas/quoteSchema";
import type { Courier,QuoteContextType } from "../types/types";

export const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Courier[]>([]);

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <QuoteContext.Provider value={{ formData, updateFormData, isLoading, setIsLoading, results, setResults }}>
      {children}
    </QuoteContext.Provider>
  );
};