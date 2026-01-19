import { z } from "zod";

export const facultySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "teacher", "student"]),
  department: z.string(),
  image: z.string().optional(),
  imageCldPubId: z.string().optional(),
});
