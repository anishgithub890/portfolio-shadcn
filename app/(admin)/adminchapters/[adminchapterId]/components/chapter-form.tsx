'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Chapter } from '@prisma/client';
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
import { ChapterDescriptionForm } from './chapter-description-form';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'title name is required',
  }),
  description: z.optional(
    z.string().min(1, {
      message: 'description is required',
    })
  ),
  imageUrl: z.optional(
    z.string().min(1, {
      message: 'description is required',
    })
  ),

  // imageUrl: z.string().min(1, {
  //   message: 'Image is required',
  // }),
});

type ChapterFormValues = z.infer<typeof formSchema>;

interface ChapterFormProps {
  initialData?: Chapter | null;
}

export const ChapterForm: React.FC<ChapterFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit chapter' : 'Create chapter';
  const description = initialData ? 'Edit a chapter.' : 'Add a new chapter';
  const toastMessage = initialData ? 'Chapter updated.' : 'Chapter created.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<ChapterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      description: '',
      imageUrl: '',
    },
  });

  const onSubmit = async (data: ChapterFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/chapters/${params?.adminchapterId}`, data);
      } else {
        await axios.post(`/api/chapters`, data);
      }
      router.refresh();
      router.push(`/adminchapters`);
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
      await axios.delete(`/api/chapters/${params?.adminchapterId}`);
      router.refresh();
      router.push(`/adminchapters`);
      toast.success('Chapter deleted.');
    } catch (error: any) {
      toast.error('Make sure you removed all chapter.');
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
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chapter image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="chapter title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="chapter description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <div>
              <ChapterDescriptionForm
                initialData={chapter}
                adminchapterId={params?.adminchapterId}
              />
            </div>
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
