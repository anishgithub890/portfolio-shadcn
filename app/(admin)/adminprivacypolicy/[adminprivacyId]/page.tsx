import prisma from '@/lib/prismadb';

import { PrivacyForm } from './components/privacy-form';
import Container from '@/components/container';

const AdminPrivacyPage = async ({
  params,
}: {
  params: { adminprivacyId: string };
}) => {
  const privacy = await prisma.privacy.findFirst({
    where: {
      id: params.adminprivacyId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <PrivacyForm initialData={privacy} />
        </div>
      </Container>
    </div>
  );
};

export default AdminPrivacyPage;
