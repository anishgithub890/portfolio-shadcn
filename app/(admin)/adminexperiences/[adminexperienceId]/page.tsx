import prisma from '@/lib/prismadb';

import { ExperienceForm } from './components/experience-form';
import Container from '@/components/container';

const AdminExperiencePage = async ({
  params,
}: {
  params: { adminexperienceId: string };
}) => {
  const experience = await prisma.experience.findFirst({
    where: {
      id: params.adminexperienceId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ExperienceForm initialData={experience} />
        </div>
      </Container>
    </div>
  );
};

export default AdminExperiencePage;
