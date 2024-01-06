import getCurrentUser from '@/app/actions/getCurrentUser';
import HomePage from '@/app/(client)/(routes)/home/page';

import Navbar from '@/components/navbar/navbar';
import ClientOnly from '@/components/client-only';

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full relative">
      <main>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <HomePage />
        </ClientOnly>
      </main>
    </div>
  );
}
