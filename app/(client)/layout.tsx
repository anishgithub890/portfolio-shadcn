import getCurrentUser from '@/app/actions/getCurrentUser';

import Navbar from '@/components/navbar/navbar';
import ClientOnly from '@/components/client-only';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <main>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          {children}
        </ClientOnly>
      </main>
    </div>
  );
};

export default MainLayout;
