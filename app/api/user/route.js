import connectMongoDB from "@/config/db";
import { NextResponse } from "next/server";
import User from "@/models/user";


// get all users
export async function GET() {
    try {
        await connectMongoDB();
        const users = await User.find();        
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

// create user
export async function POST(request) {
    try {
        await connectMongoDB();
        const data = await request.json();
        const user = await User.create({ ...data });
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}