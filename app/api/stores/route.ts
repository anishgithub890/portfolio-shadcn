import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const store = await prisma.store.create({
      data: {
        userId: currentUser.id,
        name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
