import Link from 'next/link';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getResumes from '@/app/actions/getResumes';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResumeCard from './components/resume-card';

const ResumePage = async () => {
  const currentUser = await getCurrentUser();

  const resumes = await getResumes({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          {/* intro-screen */}
          <div className="pt-16">
            {resumes!.length === 0 ? (
              <div className="pt-1">
                <EmptyState showReset />
              </div>
            ) : (
              <div className="pt-8">
                <div className="flex-1 pb-4">
                  <h2 className="text-zinc-900 text-xl font-semibold dark:text-white pb-1">
                    Click the button to resume download and print.
                  </h2>
                  <div className="pt-1">
                    <Link
                      href={
                        'https://drive.google.com/file/d/1mbc22zEemgzNRlNF0rQwEmCq7r5u-mZl/view?usp=sharing'
                      }
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button size="lg" variant="outline">
                        Download / Print
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-2">
                    <Separator orientation="horizontal" />
                  </div>
                </div>

                {resumes!.map((resume: any) => {
                  return (
                    <ResumeCard
                      currentUser={currentUser}
                      key={resume.id}
                      data={resume}
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

export default ResumePage;
