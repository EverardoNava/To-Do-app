import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

    await prisma.todo.deleteMany(); //delete * from todo
    await prisma.user.deleteMany(); //delete * from todo

    const user = await prisma.user.create({
        data: {
            email: "test@test.com",
            password: bcrypt.hashSync("123456"),
            roles: ["admin", "client", "super-user"],
            todos: {
                create: [
                    { description: "Gema del alma", completed: true },
                    { description: "Gema del poder", completed: false },
                    { description: "Gema del tiempo", completed: false },
                    { description: "Gema del espacio", completed: false },
                    { description: "Gema de la mente", completed: false },
                    { description: "Gema de la realidad", completed: false },
                ]
            }
        }
    })

    // await prisma.todo.createMany({
    //     data: [
    //         { description: "Gema del alma", completed: true },
    //         { description: "Gema del poder", completed: false },
    //         { description: "Gema del tiempo", completed: false },
    //         { description: "Gema del espacio", completed: false },
    //         { description: "Gema de la mente", completed: false },
    //         { description: "Gema de la realidad", completed: false },
    //     ]
    // })


    return NextResponse.json({ message: "Seed Executed" });
}