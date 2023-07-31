import connectMongoDB from "@/config/db";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

// get all todo
export async function GET() {
    try {
        await connectMongoDB();
        const todos = await Todo.find();
        return NextResponse.json({ todos });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

// create todo
export async function POST(request) {
    try {
        await connectMongoDB();
        const data = await request.json();
        const todo = await Todo.create({ ...data });
        return NextResponse.json({ todo });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

// delete todo
export async function DELETE(request) {
    try {
        await connectMongoDB();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const data = await Todo.findByIdAndDelete(id);
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}