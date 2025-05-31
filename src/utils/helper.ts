import { supabase } from "@/lib/supabase";


export const signIn = async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
    });
    
    if (error) {
        throw new Error(error.message);
    }
    
    return data;
}

