import {
  Project,
  Skill,
  Testimonial,
  Experience,
  Resume,
  Contact,
  Image,
  User,
} from '@prisma/client';

export type SafeProject = Omit<Project, 'createdAt' | 'updatedAt'> & {
  images: Image[];
  createdAt: string;
  updatedAt: string;
};
export type SafeImage = Omit<Image, 'createdAt' | 'updatedAt'> & {
  // url: string;
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

export type SafeContact = Omit<Contact, 'createdAt' | 'updatedAt'> & {
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
