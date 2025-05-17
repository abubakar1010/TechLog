import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({required_error: "Name is required"}),
    date: z.array(z.object({$d: z.any(), $y: z.number()})).nonempty({message: "Pick a date"}),
})