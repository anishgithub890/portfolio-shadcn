import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getTerm({ isFeatured }: Query) {
  try {
    const terms = await prisma.term.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeTerms = terms.map((term) => ({
      ...term,

      createdAt: term.createdAt.toISOString(),
      updatedAt: term.updatedAt.toISOString(),
    }));
    return safeTerms;
  } catch (error) {
    console.log('[GET_TERM]', error);
    return null;
  }
}
