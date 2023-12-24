'use client';

import { SafeProject, SafeUser } from '@/app/types';

import Container from '@/components/container';
import ProjectHead from './project-head';
import ProjectInfo from './project-info';

interface ProjectClientProps {
  project: SafeProject & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ProjectClient: React.FC<ProjectClientProps> = ({
  project,
  currentUser,
}) => {
  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          pt-24
        "
      >
        <div className="flex flex-col gap-6">
          <ProjectHead
            name={project.name}
            imageUrl={project.imageUrl}
            id={project.id}
            currentUser={currentUser}
          />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ProjectInfo
              user={project.user}
              name={project.name}
              explanation={project.explanation}
              viewUrl={project.viewUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectClient;
