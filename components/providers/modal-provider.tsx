'use client';

import { useEffect, useState } from 'react';
import { CreateRegisterModal } from '@/components/modals/create-register-modal';
import { CreateLoginModal } from '@/components/modals/create-login-modal copy';
import { EditProfileModal } from '../modals/edit-register-modal';
import { CreateStoreModal } from '../modals/create-store-modal';
import LoginModal from '../modals/login-modal';
import RegisterModal from '../modals/register-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateRegisterModal />
      <CreateLoginModal />
      <CreateStoreModal />
      <EditProfileModal />
      <LoginModal />
      <RegisterModal />
    </>
  );
};
