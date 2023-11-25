import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getProjects({ isFeatured }: Query) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeProjects = projects.map((project) => ({
      ...project,

      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
    }));
    return safeProjects;
  } catch (error) {
    console.log('[GET_PROJECT]', error);
    return null;
  }
}
