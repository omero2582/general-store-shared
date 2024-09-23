import { z } from "zod";
import { productSchema } from "./schemas.js";

const out = productSchema.parse({
  name: 'hi',
  images: [{imageId: 'third', order: 12}, {imageId: 'first', order: 0}, {imageId: 'second', order: 2}]
})
console.log(out)