import { z } from "zod"

export const schema = z.object({
  academicSemester: z.string(),
  status: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  minCredit: z.number(),
  maxCredit: z.number()
})
