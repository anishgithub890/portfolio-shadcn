'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Trash } from 'lucide-react';
import { Feedback } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';

import { Textarea } from '@/components/ui/textarea';
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
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  type: z.string().min(1, {
    message: 'type is required.',
  }),
  comment: z.string().min(1, {
    message: 'comment is required.',
  }),
});

type FeedbackFormValues = z.infer<typeof formSchema>;

interface FeedbackFormProps {
  initialData?: Feedback | null;
}

export const FeedbackForm = ({ initialData }: FeedbackFormProps) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit feedback' : 'Create feedback';
  const description = initialData ? 'Edit a feedback' : 'Add a new feedback';
  const toastMessage = initialData ? 'Feedback updated' : 'Feedback created';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      type: '',
      comment: '',
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/feedbacks/${params?.adminfeedbackId}`, data);
      } else {
        await axios.post(`/api/feedbacks`, data);
      }
      toast.success(toastMessage, {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      router.refresh();
      router.push(`/adminfeedbacks`);
    } catch (error: any) {
      toast.error('Something went wrong.', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/contacts/${params?.admincontactId}`);
      toast.success(toastMessage, {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      router.refresh();
      router.push(`/admincontacts`);
    } catch (error: any) {
      toast.error('Something went wrong.', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
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
        <HeadingTheme title={title} description={description} />
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
          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="feedback comment"
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
