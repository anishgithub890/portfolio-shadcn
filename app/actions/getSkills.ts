import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getSkills({ isFeatured }: Query) {
  try {
    let query: any = {
      isFeatured,
    };

    const skills = await prisma.skill.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeSkills = skills.map((skill) => ({
      ...skill,

      createdAt: skill.createdAt.toISOString(),
      updatedAt: skill.updatedAt.toISOString(),
    }));
    return safeSkills;
  } catch (error) {
    console.log('[GET_SKILL]', error);
    return null;
  }
}
