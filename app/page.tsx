import Navbar from '@/components/navbar/navbar';
import HomePage from './(client)/(routes)/home/page';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from '@/components/client-only';

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full relative">
      <main>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <HomePage />
          {children}
        </ClientOnly>
      </main>
    </div>
  );
}
