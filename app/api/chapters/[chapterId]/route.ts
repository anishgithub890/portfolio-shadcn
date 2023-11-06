import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { chapterId: string } }
) {
  try {
    if (!params.chapterId) {
      return new NextResponse('Chapter id is required', { status: 400 });
    }

    const chapter = await prisma.chapter.findUnique({
      where: {
        id: params.chapterId,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[CHAPTERS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { chapterId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.chapterId) {
      return new NextResponse('Chapter id is required', { status: 400 });
    }

    const chapter = await prisma.chapter.delete({
      where: {
        id: params.chapterId,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[CHAPTERS_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { chapterId: string } }
) {
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

    if (!params.chapterId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const chapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
      },
      data: {
        title,
        description,
        imageUrl,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[CHAPTERS_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
