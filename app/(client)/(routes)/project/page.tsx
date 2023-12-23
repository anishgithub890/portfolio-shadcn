import getCurrentUser from '@/app/actions/getCurrentUser';
import getProjects from '@/app/actions/getProjects';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import ProjectCard from '../screen-cards/project-card';
import Footer from '@/components/footer';

const ProjectPage = async () => {
  const currentUser = await getCurrentUser();

  const projects = await getProjects({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          <div className="pt-14">
            {projects?.length === 0 ? (
              <div className="pt-1">
                <EmptyState />
              </div>
            ) : (
              <div
                className="
                pt-8
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
