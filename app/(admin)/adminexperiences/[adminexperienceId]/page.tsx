import prisma from '@/lib/prismadb';

import { ExperienceForm } from './components/experience-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';

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

  if (!experience) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState
            showReset
            name="Admin Experience"
            link="/adminexperiences"
          />
        </div>
      </ClientOnly>
    );
  }

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
