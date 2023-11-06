import prisma from '@/lib/prismadb';

import { ChapterForm } from './components/chapter-form';
import Container from '@/components/container';

const AdminChapterPage = async ({
  params,
}: {
  params: { adminchapterId: string };
}) => {
  const chapter = await prisma.chapter.findFirst({
    where: {
      id: params.adminchapterId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ChapterForm initialData={chapter} />
        </div>
      </Container>
    </div>
  );
};

export default AdminChapterPage;
