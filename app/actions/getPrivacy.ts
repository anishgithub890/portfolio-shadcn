import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getPrivacy({ isFeatured }: Query) {
  try {
    const privacies = await prisma.privacy.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safePrivacies = privacies.map((privacy) => ({
      ...privacy,

      createdAt: privacy.createdAt.toISOString(),
      updatedAt: privacy.updatedAt.toISOString(),
    }));
    return safePrivacies;
  } catch (error) {
    console.log('[GET_PRIVACY]', error);
    return null;
  }
}
