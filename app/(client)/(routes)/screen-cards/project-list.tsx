import ProjectCard from './project-card';
import { SafeImage, SafeProject } from '@/app/types';
import EmptyState from '@/components/empty-state';

interface ProjectListProps {
  title: string;
  items: SafeProject[];
  images: SafeImage;
}

const ProjectList: React.FC<ProjectListProps> = ({ title, items, images }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && (
        <div className="pt-1">
          <EmptyState />
        </div>
      )}
      <div>
        {items.map((item) => (
          <ProjectCard key={item.id} data={item} image={images} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
