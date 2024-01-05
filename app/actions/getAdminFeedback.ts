import prisma from '@/lib/prismadb';

interface IParams {
  adminfeedbackId?: string;
}

export default async function getAdminFeedbackById(params: IParams) {
  try {
    const { adminfeedbackId } = params;

    const feedback = await prisma.feedback.findUnique({
      where: {
        id: adminfeedbackId,
      },
    });

    if (!feedback) {
      return null;
    }

    return {
      ...feedback,

      createdAt: feedback.createdAt.toISOString(),
      updatedAt: feedback.updatedAt.toISOString(),

      user: {
        ...feedback,

        createdAt: feedback.createdAt.toISOString(),
        updatedAt: feedback.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.log('[GET_ADMINFEEDBACKBYID]');
    return null;
  }
}
