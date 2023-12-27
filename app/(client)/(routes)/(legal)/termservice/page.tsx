import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import Footer from '@/components/footer';

const TermPage = () => {
  return (
    <ClientOnly>
      <Container>
        <div className="pt-16">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div>
            <Footer />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default TermPage;
