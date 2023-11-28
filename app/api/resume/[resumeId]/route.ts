import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { resumeId: string } }
) {
  try {
    if (!params.resumeId) {
      return new NextResponse('Resume Id id required', { status: 400 });
    }

    const resume = await prisma.resume.findUnique({
      where: {
        id: params.resumeId,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.log('[RESUME_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { resumeId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.resumeId) {
      return new NextResponse('Resume id is required', { status: 400 });
    }

    const resume = await prisma.resume.delete({
      where: {
        id: params.resumeId,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.log('[RESUME_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { resumeId: string } }
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

    if (!params.resumeId) {
      return new NextResponse('Resume id is required', { status: 400 });
    }

    const resume = await prisma.resume.update({
      where: {
        id: params.resumeId,
      },
      data: {
        note,
        isFeatured,
      },
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.log('[RESUME_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
