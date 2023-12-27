import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { privacyId: string } }
) {
  try {
    if (!params.privacyId) {
      return new NextResponse('Privacy Id id required', { status: 400 });
    }

    const privacy = await prisma.privacy.findUnique({
      where: {
        id: params.privacyId,
      },
    });

    return NextResponse.json(privacy);
  } catch (error) {
    console.log('[PRIVACY_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { privacyId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.privacyId) {
      return new NextResponse('Privacy id is required', { status: 400 });
    }

    const privacy = await prisma.privacy.delete({
      where: {
        id: params.privacyId,
      },
    });

    return NextResponse.json(privacy);
  } catch (error) {
    console.log('[PRIVACY_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { privacyId: string } }
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

    if (!params.privacyId) {
      return new NextResponse('Privacy id is required', { status: 400 });
    }

    const privacy = await prisma.privacy.update({
      where: {
        id: params.privacyId,
      },
      data: {
        note,
        isFeatured,
      },
    });

    return NextResponse.json(privacy);
  } catch (error) {
    console.log('[PRIVACY_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
