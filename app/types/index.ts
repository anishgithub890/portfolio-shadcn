import { Skill, Testimonial, User } from '@prisma/client';

export type SafeSkill = Omit<Skill, 'updatedAt' | 'createdAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeTestimonial = Omit<Testimonial, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
