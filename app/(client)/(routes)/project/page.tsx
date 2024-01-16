import getCurrentUser from '@/app/actions/getCurrentUser';
import getProjects from '@/app/actions/getProjects';

import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import Footer from '@/components/footer';
import ProjectCard from '../screen-cards/project-card';
import ClientOnly from '@/components/client-only';

const ProjectPage = async () => {
  const currentUser = await getCurrentUser();
  const projects = await getProjects({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          <div>
            <div className="underline underline-offset-[0.5rem] decoration-dashed">
              <p className="font-bold uppercase text-3xl text-center block bg-gradient-to-r text-slate-700 from-pink-500 to-violet-500 bg-clip-text text-transparent pt-2">
                My Creative Section
              </p>
            </div>
            {projects?.length === 0 ? (
              <div className="pt-1">
                <EmptyState />
              </div>
            ) : (
              <div
                className="
                pt-5
                grid
                grid-cols-1
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-3
                2xl:grid-cols-3
                gap-4
              "
              >
                {projects?.map((project: any) => {
                  return (
                    <ProjectCard
                      currentUser={currentUser}
                      key={project.id}
                      data={project}
                    />
                  );
                })}
              </div>
            )}
            <div className="pt-2">
              <Footer />
            </div>
          </div>
        </Container>
      </ClientOnly>
    </>
  );
};

export default ProjectPage;
