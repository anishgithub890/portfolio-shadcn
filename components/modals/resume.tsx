// 'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useParams, useRouter } from 'next/navigation';

import { useModal } from '@/hooks/use-modal-store';

import { SafeResume, SafeUser } from '@/app/types';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

import { Separator } from '@/components/ui/separator';
import CustomeButton from '@/components/custome-button';
import { Preview } from '@/components/preview';
import Container from '@/components/container';
import { Button } from '../ui/button';
import Link from 'next/link';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface ShowResumeProps {
  data: SafeResume;
  currentUser?: SafeUser | null;
}

export const ShowResume: React.FC<ShowResumeProps> = async ({ data }) => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const params = useParams();
  const [isLoading] = useState(false);

  const isModalOpen = isOpen && type === 'showResume';

  const currentUser = await getCurrentUser();

  return (
    <Container>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Customize your server
            </DialogTitle>

            <div className="pt-2">
              <Link
                href={
                  'https://drive.google.com/file/d/1mbc22zEemgzNRlNF0rQwEmCq7r5u-mZl/view?usp=sharing'
                }
                rel="noreferrer"
                target="_blank"
              >
                <CustomeButton label="Download/Print" disabled={isLoading} />
              </Link>
            </div>
          </DialogHeader>

          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
