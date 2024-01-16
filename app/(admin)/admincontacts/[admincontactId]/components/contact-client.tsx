'use client';

import { SafeContact, SafeUser } from '@/app/types';

import Container from '@/components/container';
import AdminContactInfo from './contact-info';

interface ContactClientProps {
  contact: SafeContact;
  currentUser?: SafeUser | null;
}

const AdminContactClient: React.FC<ContactClientProps> = ({ contact }) => {
  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          pt-10
        "
      >
        <div className="flex flex-col gap-6">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-2
              pb-6
            "
          >
            <AdminContactInfo
              name={contact.name}
              email={contact.email}
              message={contact.message}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminContactClient;
