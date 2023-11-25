import prisma from '@/lib/prismadb';

interface Query {
  isFeatured?: boolean;
}

export default async function getTestimonials({ isFeatured }: Query) {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        isFeatured,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeSkills = testimonials.map((testimonial) => ({
      ...testimonial,

      createdAt: testimonial.createdAt.toISOString(),
      updatedAt: testimonial.updatedAt.toISOString(),
    }));
    return safeSkills;
  } catch (error) {
    console.log('[GET_TESTIMONIALS]', error);
    return null;
  }
}
