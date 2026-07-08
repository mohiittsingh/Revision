import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").trim(),
  price: z.coerce.number().positive("Price must be greater than 0"),
  description: z.string().optional(),
});

export const updateCourseSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").trim().optional(),
  price: z.coerce.number().positive("Price must be greater than 0").optional(),
  description: z.string().optional(),
});
