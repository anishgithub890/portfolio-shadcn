import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/components/client-only';
import Container from '@/components/container';

const ProjectPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <ClientOnly>
        <Container>
          <div className="pt-14">{}</div>
        </Container>
      </ClientOnly>
    </>
  );
};

export default ProjectPage;
