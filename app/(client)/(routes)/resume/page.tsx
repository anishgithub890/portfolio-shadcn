import getCurrentUser from '@/app/actions/getCurrentUser';
import getResumes from '@/app/actions/getResumes';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
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
          </div>
        </Container>
      </ClientOnly>
    </>
  );
};

export default ResumePage;
