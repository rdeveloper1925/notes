import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from '../lib/drizzle';
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    database: drizzleAdapter(db, {
        provider: 'pg',
        schema: schema
    }),
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            // await sendEmail({
            //     to: user.email,
            //     subject: "Verify your email address",
            //     text: `Click the link to verify your email: ${url}`,
            // });
        },
    },
    plugins: [nextCookies()] //must be last
});