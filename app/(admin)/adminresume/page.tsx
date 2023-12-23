import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ResumeColumn } from './components/columns';
import { ResumeClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminResumesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const resumes = await prisma.resume.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedResumes: ResumeColumn[] = resumes.map((item) => ({
    id: item.id,
    note: item.note,
    isFeatured: item.isFeatured,
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
              <ResumeClient data={formattedResumes} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminResumesPage;
