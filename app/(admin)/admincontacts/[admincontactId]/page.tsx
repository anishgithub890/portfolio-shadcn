import prisma from '@/lib/prismadb';

import { ContactForm } from './components/contact-form';
import Container from '@/components/container';

const AdminContactPage = async ({
  params,
}: {
  params: { admincontactId: string };
}) => {
  const contact = await prisma.contact.findFirst({
    where: {
      id: params.admincontactId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ContactForm initialData={contact} />
        </div>
      </Container>
    </div>
  );
};

export default AdminContactPage;
