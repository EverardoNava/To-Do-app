import prisma from '@/app/lib/prisma';
import { Todo } from '@prisma/client';
import { get } from 'http';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';


interface Segments {
    params: {
        id: string;
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {

    const todo = await prisma.todo.findFirst({ where: { id: id } });

    return todo;

}

export async function GET(request: Request, { params }: Segments) {

    const todo = await getTodo(params.id);


    if (!todo) {
        return NextResponse.json({ message: `Todo con id: ${params.id} no existe` }, { status: 404 })
    }
    return NextResponse.json(todo)
}

const putSchema = yup.object({
    completed: yup.boolean().optional(),
    description: yup.string().optional(),
})


export async function PUT(request: Request, { params }: Segments) {

    const todo = await getTodo(params.id);

    if (!todo) {
        return NextResponse.json({ message: `Todo con id: ${params.id} no encontrado` }, { status: 404 })
    }

    try {
        const { completed, description, ...rest } = await putSchema.validate(await request.json());

        const updatedTodo = await prisma.todo.update({
            where: { id: params.id },
            data: { completed, description }

        });

        return NextResponse.json(updatedTodo);

    } catch (error) {
        return NextResponse.json(error, { status: 400 });

    }
}


export async function DELETE(request: Request, { params }: Segments) {

    const todo = await getTodo(params.id);

    if (!todo) {
        return NextResponse.json({ message: `Todo con id: ${params.id} no encontrado` }, { status: 404 })
    }

    try {
        const deletedTodo = await prisma.todo.delete({
            where: { id: params.id }
        })

        return NextResponse.json({ message: `Todo con id: ${params.id} eliminado correctamente` }, { status: 200 });

    } catch (error) {
        return NextResponse.json(error, { status: 400 });

    }
}
