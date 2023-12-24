import prisma from '@/lib/prismadb';

interface IParams {
  projectId?: string;
}

export default async function getProjectById(params: IParams) {
  try {
    const { projectId } = params;

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        user: true,
      },
    });

    if (!project) {
      return null;
    }

    return {
      ...project,

      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),

      user: {
        ...project.user,

        createdAt: project.user.createdAt.toISOString(),
        updatedAt: project.user.updatedAt.toISOString(),
        emailVerified: project.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error) {
    console.log('[GET_PROJECTBYID]');
    return null;
  }
}
