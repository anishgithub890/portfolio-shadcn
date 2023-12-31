import { NextResponse } from 'next/server';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, comment } = body;

    if (!type) {
      return new NextResponse('Type is required', { status: 400 });
    }
    if (!comment) {
      return new NextResponse('Comment is required', { status: 400 });
    }

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.log('[FEEDBACK_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
