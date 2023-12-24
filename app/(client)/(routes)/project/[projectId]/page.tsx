import getCurrentUser from '@/app/actions/getCurrentUser';
import getProjectById from '@/app/actions/getProjectById';
import ClientOnly from '@/components/client-only';
import EmptyState from '@/components/empty-state';
import ProjectClient from './components/project-client';

interface IParams {
  projectId?: string;
}

const ProjectPage = async ({ params }: { params: IParams }) => {
  const project = await getProjectById(params);
  const currentUser = await getCurrentUser();

  if (!project) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ProjectClient project={project} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ProjectPage;
