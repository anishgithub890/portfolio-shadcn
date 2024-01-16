import getCurrentUser from '@/app/actions/getCurrentUser';
import getSkills from '@/app/actions/getSkills';
import getTestimonials from '@/app/actions/getTestimonials';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import getExperiences from '@/app/actions/getExperiences';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/footer';

import SkillCard from '../screen-cards/skill-card';
import ExperienceCard from '../screen-cards/experience-card';
import IntroCard from '../screen-cards/intro-card';
import TestimonialCard from '../screen-cards/testimonial-card';
import { Widget } from '@/components/feedback-widget/widget';

const HomePage = async () => {
  const currentUser = await getCurrentUser();

  const skills = await getSkills({ isFeatured: true });
  const experiences = await getExperiences({ isFeatured: true });
  const testimonials = await getTestimonials({ isFeatured: true });

  return (
    <>
      <ClientOnly>
        <Container>
          <div className="pt-[2px]">
            {/* intro-screen */}
            <div>
              <IntroCard />
            </div>

            <h2 className="font-bold text-3xl text-center pt-4 underline underline-offset-8">
              Skills
            </h2>

            {skills?.length === 0 ? (
              <EmptyState />
            ) : (
              <div
                className="
                pt-6
                grid 
                grid-cols-3 
                sm:grid-cols-4 
                md:grid-cols-6 
                lg:grid-cols-8
                xl:grid-cols-9
                2xl:grid-cols-10
                gap-4
                "
              >
                {skills?.map((skill: any) => {
                  return (
                    <SkillCard
                      currentUser={currentUser}
                      key={skill.id}
                      data={skill}
                    />
                  );
                })}
              </div>
            )}

            <div className="pt-8">
              <Separator orientation="horizontal" />
            </div>
            <h2 className="font-bold text-3xl text-center pt-8 underline underline-offset-8">
              Experiences
            </h2>
            {experiences?.length === 0 ? (
              <EmptyState />
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
                2xl:grid-cols-4
                gap-4
              "
              >
                {experiences?.map((experience: any) => {
                  return (
                    <ExperienceCard
                      currentUser={currentUser}
                      key={experience.id}
                      data={experience}
                    />
                  );
                })}
              </div>
            )}

            <div className="pt-8">
              <Separator orientation="horizontal" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl text-center pt-8 underline underline-offset-8">
                Testimonial
              </h2>
              {testimonials?.length === 0 ? (
                <EmptyState />
              ) : (
                <div
                  className="
                pt-8
                grid
                grid-cols-1 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-2
                xl:grid-cols-2
                2xl:grid-cols-3
                gap-4
              "
                >
                  {testimonials?.map((testimonial: any) => {
                    return (
                      <TestimonialCard
                        currentUser={currentUser}
                        key={testimonial.id}
                        data={testimonial}
                      />
                    );
                  })}
                </div>
              )}
              <Widget />
              {/* footer-screen */}
              <div className="pt-2">
                <Footer />
              </div>
            </div>
          </div>
        </Container>
      </ClientOnly>
    </>
  );
};

export default HomePage;
