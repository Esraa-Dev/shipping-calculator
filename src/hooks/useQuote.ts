import { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used within QuoteProvider");
  return context;
};