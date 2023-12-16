import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    if (!params.contactId) {
      return new NextResponse('Contact Id id required', { status: 400 });
    }

    const contact = await prisma.contact.findUnique({
      where: {
        id: params.contactId,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.contactId) {
      return new NextResponse('Contact id is required', { status: 400 });
    }

    const contact = await prisma.contact.delete({
      where: {
        id: params.contactId,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { name, email, message } = body;

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }
    if (!email) {
      return new NextResponse('Name is required', { status: 400 });
    }
    if (!message) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!params.contactId) {
      return new NextResponse('Resume id is required', { status: 400 });
    }

    const contact = await prisma.contact.update({
      where: {
        id: params.contactId,
      },
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
