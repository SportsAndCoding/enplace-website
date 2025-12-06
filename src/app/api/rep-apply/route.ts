import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // server-side ONLY
);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            full_name,
            email,
            phone,
            city,
            state,
            experience_level,
            referral_source,
            resume_url
        } = body;

        // --- Basic Validation ---
        if (!full_name || !email) {
            return NextResponse.json(
                { error: "full_name and email are required." },
                { status: 400 }
            );
        }

        // --- Insert into Supabase ---
        const { data, error } = await supabase
            .from("rep_candidates")
            .insert([
                {
                    full_name,
                    email,
                    phone,
                    city,
                    state,
                    experience_level,
                    referral_source,
                    resume_url,
                    application_status: "new"
                }
            ])
            .select("*")
            .single();

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json(
                { error: "Failed to submit application." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, candidate: data },
            { status: 201 }
        );

    } catch (err: any) {
        console.error("API Error:", err);
        return NextResponse.json(
            { error: "Invalid request." },
            { status: 400 }
        );
    }
}

export function GET() {
    return NextResponse.json(
        { error: "Method not allowed." },
        { status: 405 }
    );
}
