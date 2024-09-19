import { z } from "zod";

export const productSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name is required"),
  imageId: z.string({ required_error: "imageId is required" }).min(1, "imageId is required"),
  description: z.string().optional(),
  visibility: z.enum(['public', 'private']).default('public').optional(),
  // price: z.coerce.number().int().optional(),
  price: z.coerce
  .number({ invalid_type_error: 'Price must be a number' })
  // .positive('Price must be a positive number')
  .nonnegative('Price must be a positive number')
  .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
    message: 'Price must have up to 2 decimal places',
  })
  .optional()
  // price: z.union([z.number().positive(), z.nan()]).optional()
});

export const productSchemaNoImage = productSchema.omit({imageId: true});
export const productSchemaOptional = productSchema.partial();
export type TProductSchema = z.infer<typeof productSchema>;
export type TProductSchemaNoImage = z.infer<typeof productSchemaNoImage>;
export type TProductSchemaOptional = z.infer<typeof productSchemaOptional>;