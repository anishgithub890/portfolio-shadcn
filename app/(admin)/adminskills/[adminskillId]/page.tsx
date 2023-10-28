import prisma from '@/lib/prismadb';

import { SkillForm } from './components/billboard-form';
import Container from '@/components/container';

const BillboardPage = async ({
  params,
}: {
  params: { adminskillId: string };
}) => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: params.adminskillId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SkillForm initialData={skill} />
        </div>
      </Container>
    </div>
  );
};

export default BillboardPage;
