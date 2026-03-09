import { z } from "zod";
import { quoteSchema } from "../schemas/quoteSchema";

export type QuoteFormData = z.infer<typeof quoteSchema>;

export interface Courier {
  id: string;
  name: string;
  logo?: string;
  basePrice: number;
  tax: number;
  estimatedDays: number;
  isCheapest?: boolean;
  isFastest?: boolean;
}

export interface QuoteContextType {
  formData: Partial<QuoteFormData>;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  results: Courier[];
  setResults: (results: Courier[]) => void;
}