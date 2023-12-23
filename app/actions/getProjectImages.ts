import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function geProjectImages({ isFeatured }: Query) {
  try {
    const images = await prisma.image.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeProjectImages = images.map((image) => ({
      ...image,

      createdAt: image.createdAt.toISOString(),
      updatedAt: image.updatedAt.toISOString(),
    }));
    return safeProjectImages;
  } catch (error) {
    console.log('[GET_IMAGE]', error);
    return null;
  }
}
