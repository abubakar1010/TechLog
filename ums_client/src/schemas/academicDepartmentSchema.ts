import { z } from "zod";

export const academicDepartmentSchema = z.object({
    name: z.string({required_error: "Department Name is Required"}),
    academicFaculty: z.string({required_error: "Faculty is required"})
})