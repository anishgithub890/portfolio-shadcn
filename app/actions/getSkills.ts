import prisma from '@/lib/prismadb';

export default async function getSkills() {
  try {
    let query: any = {};

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
    return [];
  }
}
