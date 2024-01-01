import getCurrentUser from '@/app/actions/getCurrentUser';

import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminDashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }
  <>
    <div className="flex-col pt-14">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState showReset />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <div></div>
        ) : (
          <></>
        )}
      </Container>
    </div>
  </>;
};

export default AdminDashboardPage;
