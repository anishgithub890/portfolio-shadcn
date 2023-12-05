import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getResumes({ isFeatured }: Query) {
  try {
    const resumes = await prisma.resume.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeResumes = resumes.map((resume) => ({
      ...resume,

      createdAt: resume.createdAt.toISOString(),
      updatedAt: resume.updatedAt.toISOString(),
    }));
    return safeResumes;
  } catch (error) {
    console.log('[GET_RESUME]', error);
    return null;
  }
}
