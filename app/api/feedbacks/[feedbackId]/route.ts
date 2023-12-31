import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { feedbackId: string } }
) {
  try {
    if (!params.feedbackId) {
      return new NextResponse('Feedback Id id required', { status: 400 });
    }

    const feedback = await prisma.feedback.findUnique({
      where: {
        id: params.feedbackId,
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.log('[FEEDBACK_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { feedbackId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.feedbackId) {
      return new NextResponse('Feedback id is required', { status: 400 });
    }

    const feedback = await prisma.feedback.delete({
      where: {
        id: params.feedbackId,
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.log('[FEEDBACK_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { feedbackId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { type, comment } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!type) {
      return new NextResponse('Type is required', { status: 400 });
    }
    if (!comment) {
      return new NextResponse('Comment is required', { status: 400 });
    }

    if (!params.feedbackId) {
      return new NextResponse('Resume id is required', { status: 400 });
    }

    const feedback = await prisma.feedback.update({
      where: {
        id: params.feedbackId,
      },
      data: {
        type,
        comment,
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.log('[FEEDBACK_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
