import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
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

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        userId: currentUser.id,
        // id: params.storeId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 });
    }

    const billboard = await prisma.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log('[BILLBOARDS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const billboards = await prisma.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboards);
  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
