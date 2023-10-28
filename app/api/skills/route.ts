import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { label, imageUrl } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!label) {
      return new NextResponse('Label is required', { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 });
    }

    const skill = await prisma.skill.create({
      data: {
        label,
        imageUrl,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILLS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
