import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ExperienceColumn } from './components/columns';
import { ExperienceClient } from './components/client';

import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminExperiencesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const experiences = await prisma.experience.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedExperiences: ExperienceColumn[] = experiences.map((item) => ({
    id: item.id,
    year: item.year,
    language: item.language,
    description: item.description,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-14">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState showReset />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <ExperienceClient data={formattedExperiences} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminExperiencesPage;
