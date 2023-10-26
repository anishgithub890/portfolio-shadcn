'use client';

import { useEffect, useState } from 'react';
import { CreateRegisterModal } from '@/components/modals/create-register-modal';
import { CreateLoginModal } from '@/components/modals/create-login-modal copy';
import { EditProfileModal } from '@/components/modals/edit-register-modal';
import { CreateStoreModal } from '@/components/modals/create-store-modal';
import { StoreModal } from '@/components/modals/store-modal';
import LoginModal from '@/components/modals/login-modal';
import RegisterModal from '@/components/modals/register-modal';

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
      <StoreModal />
    </>
  );
};
