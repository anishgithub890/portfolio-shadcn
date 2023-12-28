import getCurrentUser from '@/app/actions/getCurrentUser';
import getTerm from '@/app/actions/getTerm';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

import TermCard from '../../screen-cards/term-card';

const TermPage = async () => {
  const currentUser = await getCurrentUser();

  const terms = await getTerm({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          {/* intro-screen */}
          <div className="pt-16">
            {terms!.length === 0 ? (
              <div className="pt-1">
                <EmptyState showReset />
              </div>
            ) : (
              <div className="pt-5">
                <div className="flex-1 pb-4">
                  <h2 className="text-zinc-900 text-3xl font-bold dark:text-white pb-1">
                    Code with Anish
                  </h2>
                  <div className="pt-2">
                    <Separator orientation="horizontal" />
                  </div>
                </div>

                {terms!.map((term: any) => {
                  return (
                    <TermCard
                      currentUser={currentUser}
                      key={term.id}
                      data={term}
                    />
                  );
                })}
              </div>
            )}

            {/* footer-screen */}
            <div className="pt-2">
              <Footer />
            </div>
          </div>
        </Container>
      </ClientOnly>
    </>
  );
};

export default TermPage;
