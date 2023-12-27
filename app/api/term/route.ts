import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { note, isFeatured } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }
    if (!note) {
      return new NextResponse('Note is required', { status: 400 });
    }

    const term = await prisma.term.create({
      data: {
        note,
        isFeatured,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(term);
  } catch (error) {
    console.log('[TERM_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
