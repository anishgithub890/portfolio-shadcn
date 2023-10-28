import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

import prismadb from '@/lib/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { skillId: string } }
) {
  try {
    if (!params.skillId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const skill = await prismadb.skill.findUnique({
      where: {
        id: params.skillId,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { skillId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.skillId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const skill = await prismadb.skill.delete({
      where: {
        id: params.skillId,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { skillId: string } }
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

    if (!params.skillId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const skill = await prismadb.skill.update({
      where: {
        id: params.skillId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
