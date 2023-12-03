import prisma from '@/lib/prismadb';

import { ResumeForm } from './components/resume-form';
import Container from '@/components/container';

const AdminResumePage = async ({
  params,
}: {
  params: { adminresumeId: string };
}) => {
  const resume = await prisma.resume.findFirst({
    where: {
      id: params.adminresumeId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ResumeForm initialData={resume} />
        </div>
      </Container>
    </div>
  );
};

export default AdminResumePage;
