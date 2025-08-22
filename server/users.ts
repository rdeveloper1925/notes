"use server";

import { auth } from "@/lib/auth"; // path to your auth file
import { toast } from "sonner";

export const signInUser = async (email: string, password: string) => {
    try {
        const fullres = await auth.api.signInEmail({
            body: {
                email,
                password
            }
        });

         return { success: true, message: "Signed in Successfully!!!", fullRes: fullres }
    } catch (e) {
        const error = e as Error
        return { success: false, message: error.message || "Failed to sign in" }
    }
}

export const signUpUser = async (email: string, password: string, name:string)=>{
        try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name
            }
        });

        return { success: true, message: "Signed up Successfully!!!" }
    } catch (e) {
        const error = e as Error
        return { success: false, message: error.message || "Failed to sign up" }
    }
}