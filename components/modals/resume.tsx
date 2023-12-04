'use client';

import * as z from 'zod';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';

import { useModal } from '@/hooks/use-modal-store';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import CustomeButton from '@/components/custome-button';
import { Preview } from '../preview';

export const ShowResume = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const params = useParams();
  const [isLoading] = useState(false);

  const isModalOpen = isOpen && type === 'showResume';

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold pb-2">
            Resume
          </DialogTitle>
          <Separator />
          <DialogTitle className="pt-4">
            <CustomeButton label="Continue" disabled={isLoading} />
          </DialogTitle>
        </DialogHeader>

        <div className="">
          <Preview value="hhhh" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
