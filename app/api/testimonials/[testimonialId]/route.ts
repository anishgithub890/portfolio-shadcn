import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { testimonialId: string } }
) {
  try {
    if (!params.testimonialId) {
      return new NextResponse('Chapter id is required', { status: 400 });
    }

    const testimonial = await prisma.testimonial.findUnique({
      where: {
        id: params.testimonialId,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log('[TESTIMONIALS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { testimonialId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.testimonialId) {
      return new NextResponse('Chapter id is required', { status: 400 });
    }

    const testimonial = await prisma.testimonial.delete({
      where: {
        id: params.testimonialId,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log('[TESTIMONIALS_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { testimonialId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { name, role, company, comment, imageUrl, isFeatured } = body;

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

    if (!params.testimonialId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const testimonial = await prisma.testimonial.update({
      where: {
        id: params.testimonialId,
      },
      data: {
        name,
        role,
        company,
        comment,
        imageUrl,
        isFeatured,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log('[TESTIMONIALS_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
