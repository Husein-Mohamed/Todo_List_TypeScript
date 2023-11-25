import { z } from "zod";



const userschema = z.object({
    name: z.string(),
    email: z.string().email()
})

export default userschema