'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Testimonial } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { AlertModal } from '@/components/modals/alert-modal';
import ImageUpload from '@/components/ui/image-upload';
import { Preview } from '@/components/preview';
import { Textarea } from '@/components/ui/textarea';
import { Editor } from '@/components/editor';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required.',
  }),
  role: z.string().min(1, {
    message: 'role is required.',
  }),
  company: z.string().min(1, {
    message: 'company is required.',
  }),
  comment: z.string().min(1, {
    message: 'comment is required.',
  }),
  imageUrl: z
    .string()
    .min(1, {
      message: 'image is an optional.',
    })
    .optional(),
});

type TestimonialFormValues = z.infer<typeof formSchema>;

interface TestimonialFormProps {
  initialData?: Testimonial | null;
}

export const TestimonialForm: React.FC<TestimonialFormProps> = ({
  initialData,
}) => {
  return <>Hello Testimonial</>;
};
