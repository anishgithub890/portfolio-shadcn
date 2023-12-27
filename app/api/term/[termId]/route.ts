import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { termId: string } }
) {
  try {
    if (!params.termId) {
      return new NextResponse('Term Id id required', { status: 400 });
    }

    const term = await prisma.term.findUnique({
      where: {
        id: params.termId,
      },
    });

    return NextResponse.json(term);
  } catch (error) {
    console.log('[TERM_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { termId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.termId) {
      return new NextResponse('Term id is required', { status: 400 });
    }

    const term = await prisma.term.delete({
      where: {
        id: params.termId,
      },
    });

    return NextResponse.json(term);
  } catch (error) {
    console.log('[TERM_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { termId: string } }
) {
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

    if (!params.termId) {
      return new NextResponse('Term id is required', { status: 400 });
    }

    const term = await prisma.term.update({
      where: {
        id: params.termId,
      },
      data: {
        note,
        isFeatured,
      },
    });

    return NextResponse.json(term);
  } catch (error) {
    console.log('[TERM_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
