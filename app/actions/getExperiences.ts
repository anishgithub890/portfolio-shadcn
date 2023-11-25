import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getExperiences({ isFeatured }: Query) {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeExperiences = experiences.map((experience) => ({
      ...experience,

      createdAt: experience.createdAt.toISOString(),
      updatedAt: experience.updatedAt.toISOString(),
    }));
    return safeExperiences;
  } catch (error) {
    console.log('[GET_EXPERIENCES]', error);
    return null;
  }
}
