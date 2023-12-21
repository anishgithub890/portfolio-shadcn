import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ProjectColumn } from './components/columns';
import { ProjectClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminProjectsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedProjects: ProjectColumn[] = projects.map((item) => ({
    id: item.id,
    name: item.name,
    viewUrl: item.viewUrl,
    githubUrl: item.githubUrl,
    // explanation: item.explanation,
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
              <ProjectClient data={formattedProjects} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminProjectsPage;
