import getCurrentUser from '@/app/actions/getCurrentUser';
import getSkills from '@/app/actions/getSkills';
import ClientOnly from '@/components/client-only';
import Container from '@/components/container';
import RoleState from '@/components/role-state';
import SkillCard from './components/skill-card';

const SkillPage = async () => {
  const skills = await getSkills();

  const currentUser = await getCurrentUser();

  if (skills.length === 0) {
    return (
      <ClientOnly>
        <RoleState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-14">
          <h2 className="font-bold text-3xl text-center pt-2 underline underline-offset-8">
            Skills
          </h2>
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
            {skills.map((skill: any) => {
              return (
                <SkillCard
                  currentUser={currentUser}
                  key={skill.id}
                  data={skill}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default SkillPage;
