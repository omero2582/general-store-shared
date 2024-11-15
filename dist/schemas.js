import { z } from "zod";
import mongoose from 'mongoose';
// MongoID validation check:
const ObjectIdSchema = z
    .string()
    .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
});
export const productSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(1, "Name is required").max(200),
    // imageId: z.string({ required_error: "imageId is required" }).min(1, "imageId is required"),
    images: z.array(z.object({
        imageId: z.string({ required_error: "imageId is required" }).min(1, "imageId is required"),
        order: z.number().int().nonnegative(),
    })).nonempty()
        .max(10)
        .transform((arr => {
        const sorted = [...arr].sort((a, b) => a.order - b.order);
        const ordered = sorted.map((img, index) => ({ ...img, order: index + 1 }));
        return ordered;
    })),
    description: z.string().max(2000).optional(),
    visibility: z.enum(['public', 'private']).default('public').optional(),
    // price: z.coerce.number().int().optional(),
    price: z.coerce
        .number({ invalid_type_error: 'Price must be a number' })
        // .positive('Price must be a positive number')
        .nonnegative('Price must be a positive number')
        .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
        message: 'Price must have up to 2 decimal places',
    })
        .optional(),
    categories: z.array(ObjectIdSchema).max(10)
        .optional()
    // price: z.union([z.number().positive(), z.nan()]).optional()
});
export const productSchemaNoImage = productSchema.omit({ images: true });
export const changeUserLevelSchema = z.object({
    userLevel: z.enum(['user', 'admin'])
});
export const categorySchema = z.object({
    name: z.string().max(40)
});
