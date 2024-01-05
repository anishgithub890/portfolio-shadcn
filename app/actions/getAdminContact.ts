import prisma from '@/lib/prismadb';

interface IParams {
  admincontactId?: string;
}

export default async function getAdminContactById(params: IParams) {
  try {
    const { admincontactId } = params;

    const contact = await prisma.contact.findUnique({
      where: {
        id: admincontactId,
      },
    });

    if (!contact) {
      return null;
    }

    return {
      ...contact,

      createdAt: contact.createdAt.toISOString(),
      updatedAt: contact.updatedAt.toISOString(),

      user: {
        ...contact,

        createdAt: contact.createdAt.toISOString(),
        updatedAt: contact.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.log('[GET_ADMINCONTACTBYID]');
    return null;
  }
}
