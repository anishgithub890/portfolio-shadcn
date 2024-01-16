import getCurrentUser from '@/app/actions/getCurrentUser';
import getPrivacy from '@/app/actions/getPrivacy';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

import PrivacyCard from '../../screen-cards/privacy-card';

const PrivacyPage = async () => {
  const currentUser = await getCurrentUser();

  const privacies = await getPrivacy({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          {/* intro-screen */}
          <div className="pt-1">
            {privacies?.length === 0 ? (
              <div className="pt-1">
                <EmptyState showReset />
              </div>
            ) : (
              <div className="pt-5">
                <div className="flex-1 pb-4">
                  <h2 className="text-zinc-900 text-3xl font-bold dark:text-white underline underline-offset-8 pb-1">
                    Privacy Policy for Code with Anish
                  </h2>
                  <div className="pt-2">
                    <Separator orientation="horizontal" />
                  </div>
                </div>

                {privacies?.map((privacy: any) => {
                  return (
                    <PrivacyCard
                      currentUser={currentUser}
                      key={privacy.id}
                      data={privacy}
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

export default PrivacyPage;
