import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import Container from '@/components/container';
import RoleState from '@/components/role-state';
import DashboardRefresh from './dashboard-refresh';
import DashboardCard from './dashboard-card';
import { TestimonialColumn } from '../admintestimonials/components/columns';
import { FeedbackColumn } from '../adminfeedbacks/components/columns';
import { ContactColumn } from '../admincontacts/components/columns';
import { SkillColumn } from '../adminskills/components/columns';
import { ExperienceColumn } from '../adminexperiences/components/columns';
import { ProjectColumn } from '../adminprojects/components/columns';
import { UserColumn } from '../adminusers/components/columns';
import { ResumeColumn } from '../adminresume/components/columns';
import { PrivacyColumn } from '../adminprivacypolicy/components/columns';
import { TermColumn } from '../admintermservice/components/columns';

const AdminDashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <RoleState showReset title="Unauthorized" description="Please login" />
    );
  }

  const testimonialNumber: TestimonialColumn[] = (
    await prisma.testimonial.findMany({})
  ).map(() => ({}));

  const feedbackNumber: FeedbackColumn[] = (
    await prisma.feedback.findMany({})
  ).map(() => ({}));

  const contactNumber: ContactColumn[] = (
    await prisma.contact.findMany({})
  ).map(() => ({}));

  const skillNumber: SkillColumn[] = (await prisma.skill.findMany({})).map(
    () => ({})
  );

  const experienceNumber: ExperienceColumn[] = (
    await prisma.experience.findMany({})
  ).map(() => ({}));

  const projectNumber: ProjectColumn[] = (
    await prisma.project.findMany({})
  ).map(() => ({}));

  const userNumber: UserColumn[] = (await prisma.user.findMany({})).map(
    () => ({})
  );

  const resumeNumber: ResumeColumn[] = (await prisma.resume.findMany({})).map(
    () => ({})
  );

  const privacyNumber: PrivacyColumn[] = (
    await prisma.privacy.findMany({})
  ).map(() => ({}));

  const termNumber: TermColumn[] = (await prisma.term.findMany({})).map(
    () => ({})
  );

  return (
    <>
      <Container>
        <div className="flex-col pt-1">
          {currentUser?.role == 'user' ? (
            <div>
              <RoleState
                showReset
                title="Unauthorized"
                description="Please login"
              />
            </div>
          ) : currentUser?.role == 'admin' ? (
            <div className="flex-1 space-y-4 p-8 pt-6">
              <div>
                <DashboardRefresh />
              </div>
              <DashboardCard
                test={testimonialNumber}
                feed={feedbackNumber}
                cont={contactNumber}
                skl={skillNumber}
                exp={experienceNumber}
                prj={projectNumber}
                usr={userNumber}
                rsm={resumeNumber}
                pri={privacyNumber}
                trm={termNumber}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </>
  );
};

export default AdminDashboardPage;
