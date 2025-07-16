import { prisma } from "@/infra/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user = await prisma.user.create({
        data: { name: "Cabeça", counter: 100 }
    })

    const users = await prisma.user.findMany()
    return NextResponse.json({ message: "Hello world@!", users }, { status: 200 })
}