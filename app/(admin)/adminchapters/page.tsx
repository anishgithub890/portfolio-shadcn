import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ChapterColumn } from './components/columns';
import { ChapterClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminChaptersPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const chapters = await prisma.chapter.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedChapters: ChapterColumn[] = chapters.map((item) => ({
    id: item.id,
    title: item.title,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-14">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState
              title="OOOPS! ACCESS DENIED"
              description="This page not for users....!"
            />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <ChapterClient data={formattedChapters} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminChaptersPage;
