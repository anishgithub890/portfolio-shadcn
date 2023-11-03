import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prismadb from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { experienceId: string } }
) {
  try {
    if (!params.experienceId) {
      return new NextResponse('Experience Id is required', { status: 400 });
    }

    const experience = await prismadb.experience.findUnique({
      where: {
        id: params.experienceId,
      },
    });

    return NextResponse.json(experience);
  } catch (error) {
    console.log('[EXPERIENCE_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { experienceId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.experienceId) {
      return new NextResponse('Experience Id is required', { status: 400 });
    }

    const experience = await prismadb.experience.delete({
      where: {
        id: params.experienceId,
      },
    });

    return NextResponse.json(experience);
  } catch (error) {
    console.log('[EXPERIENCE_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { experienceId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { year, language, description } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!year) {
      return new NextResponse('Year is required', { status: 400 });
    }

    if (!language) {
      return new NextResponse('Language is required', { status: 400 });
    }

    if (!description) {
      return new NextResponse('Description is required', { status: 400 });
    }

    if (!params.experienceId) {
      return new NextResponse('Experience id is required', { status: 400 });
    }

    const experience = await prismadb.experience.update({
      where: {
        id: params.experienceId,
      },
      data: {
        year,
        language,
        description,
      },
    });

    return NextResponse.json(experience);
  } catch (error) {
    console.log('[EXPERIENCE_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
