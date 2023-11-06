import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { title, description, imageUrl } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!title) {
      return new NextResponse('Title is required', { status: 400 });
    }
    if (!description) {
      return new NextResponse('Description is required', { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 });
    }

    const chapter = await prisma.chapter.create({
      data: {
        title,
        description,
        imageUrl,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[CHAPTERS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
