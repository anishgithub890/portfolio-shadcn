import getCurrentUser from '@/app/actions/getCurrentUser';
import getAdminContactById from '@/app/actions/getAdminContact';

import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';
import AdminContactClient from './components/contact-client';

interface IParams {
  admincontactId?: string;
}

const AdminContactPage = async ({ params }: { params: IParams }) => {
  const contact = await getAdminContactById(params);
  const currentUser = await getCurrentUser();

  if (!contact) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState showReset name="Admin Contact" link="/admincontacts" />
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="flex-col pt-14">
        <Container>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <AdminContactClient contact={contact} currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </ClientOnly>
  );
};

export default AdminContactPage;
