import { z } from "zod";
export declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    images: z.ZodEffects<z.ZodArray<z.ZodObject<{
        publicId: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        order: number;
        publicId: string;
    }, {
        order: number;
        publicId: string;
    }>, "atleastone">, {
        order: number;
        publicId: string;
    }[], [{
        order: number;
        publicId: string;
    }, ...{
        order: number;
        publicId: string;
    }[]]>;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodDefault<z.ZodEnum<["public", "private"]>>>;
    price: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    categories: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    images: {
        order: number;
        publicId: string;
    }[];
    categories: string[];
    visibility?: "private" | "public" | undefined;
    description?: string | undefined;
    price?: number | undefined;
}, {
    name: string;
    images: [{
        order: number;
        publicId: string;
    }, ...{
        order: number;
        publicId: string;
    }[]];
    visibility?: "private" | "public" | undefined;
    description?: string | undefined;
    price?: number | undefined;
    categories?: string[] | undefined;
}>;
export declare const productSchemaNoImage: z.ZodObject<Omit<{
    name: z.ZodString;
    images: z.ZodEffects<z.ZodArray<z.ZodObject<{
        publicId: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        order: number;
        publicId: string;
    }, {
        order: number;
        publicId: string;
    }>, "atleastone">, {
        order: number;
        publicId: string;
    }[], [{
        order: number;
        publicId: string;
    }, ...{
        order: number;
        publicId: string;
    }[]]>;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodDefault<z.ZodEnum<["public", "private"]>>>;
    price: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    categories: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}, "images">, "strip", z.ZodTypeAny, {
    name: string;
    categories: string[];
    visibility?: "private" | "public" | undefined;
    description?: string | undefined;
    price?: number | undefined;
}, {
    name: string;
    visibility?: "private" | "public" | undefined;
    description?: string | undefined;
    price?: number | undefined;
    categories?: string[] | undefined;
}>;
export type TProductSchema = z.infer<typeof productSchema>;
export type TProductSchemaNoImage = z.infer<typeof productSchemaNoImage>;
export declare const changeUserLevelSchema: z.ZodObject<{
    userLevel: z.ZodEnum<["user", "admin"]>;
}, "strip", z.ZodTypeAny, {
    userLevel: "user" | "admin";
}, {
    userLevel: "user" | "admin";
}>;
export type TChangeUserLevelSchema = z.infer<typeof changeUserLevelSchema>;
export declare const categorySchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type TCategorySchema = z.infer<typeof categorySchema>;
