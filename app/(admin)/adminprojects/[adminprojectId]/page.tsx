import prisma from '@/lib/prismadb';

import { ProjectForm } from './components/project-form';
import Container from '@/components/container';

const AdminProjectPage = async ({
  params,
}: {
  params: { adminprojectId: string };
}) => {
  const project = await prisma.project.findFirst({
    where: {
      id: params.adminprojectId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProjectForm initialData={project} />
        </div>
      </Container>
    </div>
  );
};

export default AdminProjectPage;
