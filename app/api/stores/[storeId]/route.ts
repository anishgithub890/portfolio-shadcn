import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/lib/prismadb';

export async function DELETE(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await getCurrentUser();

    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const store = await prisma.store.deleteMany({
      where: {
        id: params.serverId,
        userId: profile.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_ID_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await getCurrentUser();
    const { name } = await req.json();

    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const store = await prisma.store.updateMany({
      where: {
        id: params.serverId,
        userId: profile.id,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_ID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
