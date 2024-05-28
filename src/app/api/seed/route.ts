import prisma from '@/app/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany(); //delete * from todo

    await prisma.todo.createMany({
        data: [
            { description: "Gema del alma", completed: true },
            { description: "Gema del poder", completed: false },
            { description: "Gema del tiempo", completed: false },
            { description: "Gema del espacio", completed: false },
            { description: "Gema de la mente", completed: false },
            { description: "Gema de la realidad", completed: false },
        ]
    })


    return NextResponse.json({ message: "Seed Executed" });
}