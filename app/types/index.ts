import {
  Project,
  Skill,
  Testimonial,
  Experience,
  Resume,
  User,
} from '@prisma/client';

export type SafeProject = Omit<Project, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeSkill = Omit<Skill, 'updatedAt' | 'createdAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeTestimonial = Omit<Testimonial, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeExperience = Omit<Experience, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeResume = Omit<Resume, 'createdAt' | 'updatedAt'> & {
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
