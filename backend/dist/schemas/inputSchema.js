import z from "zod";
export const inputSchema = z.object({
    name: z.string().min(4),
    idAreaOfInteresse: z.string(),
    idLocalization: z.string(),
});
