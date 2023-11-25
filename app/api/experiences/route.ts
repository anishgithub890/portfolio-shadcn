import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { year, language, description, isFeatured } = body;

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

    const experience = await prisma.experience.create({
      data: {
        year,
        language,
        description,
        isFeatured,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(experience);
  } catch (error) {
    console.log('[EXPERIENCES_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
