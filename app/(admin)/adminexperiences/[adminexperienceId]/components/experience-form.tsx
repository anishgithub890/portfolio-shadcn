'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Experience } from '@prisma/client';
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
import { Heading } from '@/components/ui/heading';
import { AlertModal } from '@/components/modals/alert-modal';

const formSchema = z.object({
  year: z.string().min(1, {
    message: 'year name is required',
  }),
  language: z.string().min(1, {
    message: 'language name is required',
  }),
  description: z.string().min(1, {
    message: 'description name is required',
  }),
});

type ExperienceFormValues = z.infer<typeof formSchema>;

interface ExperienceFormProps {
  initialData?: Experience | null;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
  initialData,
}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Experience' : 'Create Experience';
  const description = initialData
    ? 'Edit a Experience.'
    : 'Add a new Experience';
  const toastMessage = initialData
    ? 'Experience updated.'
    : 'Experience created.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      year: '',
      language: '',
      description: '',
    },
  });

  const onSubmit = async (data: ExperienceFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/experiences/${params?.adminexperienceId}`,
          data
        );
      } else {
        await axios.post(`/api/experiences`, data);
      }
      router.refresh();
      router.push(`/adminexperiences`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/experiences/${params?.adminexperienceId}`);
      router.refresh();
      router.push(`/adminexperiences`);
      toast.success('Experience deleted.');
    } catch (error: any) {
      toast.error('Make sure you removed all experience.');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Label</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Experience name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
