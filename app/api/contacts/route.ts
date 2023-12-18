import { NextResponse } from 'next/server';

import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name) {
      return new NextResponse('Note is required', { status: 400 });
    }
    if (!email) {
      return new NextResponse('Email is required', { status: 400 });
    }
    if (!message) {
      return new NextResponse('Message is required', { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
