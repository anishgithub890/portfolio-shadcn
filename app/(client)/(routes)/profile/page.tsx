import getCurrentUser from '@/app/actions/getCurrentUser';
import EditProfileClient from './components/editprofile-client';

const EditProfile = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div>Edit Profile -----</div>
      <div>
        <EditProfileClient currentUser={currentUser} />
      </div>
    </>
  );
};

export default EditProfile;
