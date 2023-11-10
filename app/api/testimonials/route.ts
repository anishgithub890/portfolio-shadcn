import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { name, role, company, comment, imageUrl } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }
    if (!role) {
      return new NextResponse('Role is required', { status: 400 });
    }
    if (!company) {
      return new NextResponse('Company is required', { status: 400 });
    }

    if (!comment) {
      return new NextResponse('Comment is required', { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 });
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        role,
        company,
        comment,
        imageUrl,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log('[TESTIMONIALS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
