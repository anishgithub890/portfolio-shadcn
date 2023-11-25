import { Skill, User } from '@prisma/client';

export type SafeSkill = Omit<Skill, 'updatedAt' | 'createdAt'> & {
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
