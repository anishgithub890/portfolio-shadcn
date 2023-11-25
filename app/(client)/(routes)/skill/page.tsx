import getCurrentUser from '@/app/actions/getCurrentUser';
import getSkills from '@/app/actions/getSkills';

import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import EmptyState from '@/components/empty-state';
import SkillCard from '../screen-cards/skill-card';
import getExperiences from '@/app/actions/getExperiences';
import ExperienceCard from '../screen-cards/experience-card';
import { Separator } from '@/components/ui/separator';

const SkillPage = async () => {
  const skills = await getSkills({ isFeatured: true });
  const experiences = await getExperiences({ isFeatured: true });

  const currentUser = await getCurrentUser();

  // if (skills!.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  // if (experiences!.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-16">
          <h2 className="font-bold text-3xl text-center pt-2 underline underline-offset-8">
            Skills
          </h2>

          {skills!.length === 0 ? (
            <div className="pt-1">
              <EmptyState />
            </div>
          ) : (
            <div
              className="
                pt-8
                grid 
                grid-cols-3 
                sm:grid-cols-4 
                md:grid-cols-6 
                lg:grid-cols-7
                xl:grid-cols-8
                2xl:grid-cols-8
                gap-4
              "
            >
              {skills!.map((skill: any) => {
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
          {experiences!.length === 0 ? (
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
                2xl:grid-cols-4
                gap-4
              "
            >
              {experiences!.map((experience: any) => {
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
        </div>
      </Container>
    </ClientOnly>
  );
};

export default SkillPage;
