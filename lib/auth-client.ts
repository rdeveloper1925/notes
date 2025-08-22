import { createAuthClient } from "better-auth/react";
import { config } from "dotenv";

//config({ path: ".env" }); // or .env.local
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.APP_BASE_URL!
})