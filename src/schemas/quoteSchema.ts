import { z } from "zod";

export const quoteSchema = z.object({
  origin: z.object({
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z.string().min(3, "Zip Code is too short"),
  }),
  destination: z.object({
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z.string().min(3, "Zip code is too short"),
  }),
  package: z.object({
    weight: z.number().gt(0, "Weight must be more than 0"),
    length: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
  }),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;