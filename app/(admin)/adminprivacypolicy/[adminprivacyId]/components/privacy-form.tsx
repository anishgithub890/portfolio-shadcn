'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trash } from 'lucide-react';
import { Privacy } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { AlertModal } from '@/components/modals/alert-modal';
import { Checkbox } from '@/components/ui/checkbox';
import { Editor } from '@/components/editor';

const formSchema = z.object({
  note: z.string().min(1, {
    message: 'note is required.',
  }),
  isFeatured: z.boolean().default(false).optional(),
});

type PrivacyFormValues = z.infer<typeof formSchema>;

interface PrivacyFormProps {
  initialData?: Privacy | null;
}

export const PrivacyForm: React.FC<PrivacyFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit privacy' : 'Create privacy';
  const description = initialData ? 'Edit a privacy' : 'Add a new privacy';
  const toastMessage = initialData ? 'Privacy updated' : 'Privacy created';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<PrivacyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      note: '',
      isFeatured: false,
    },
  });

  const onSubmit = async (data: PrivacyFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/privacy/${params?.adminprivacyId}`, data);
      } else {
        await axios.post(`/api/privacy`, data);
      }
      router.refresh();
      router.push(`/adminprivacypolicy`);
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
      await axios.delete(`/api/privacy/${params?.adminprivacyId}`);
      router.refresh();
      router.push(`/adminprivacypolicy`);
      toast.success('Privacy deleted.');
    } catch (error: any) {
      toast.error('Make sure you removed all privacy.');
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
          <div>
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Privacy Note</FormLabel>
                  <FormControl>
                    <Editor {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-2 gap-8">
            <div className="pt-2">
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Featured</FormLabel>
                      <FormDescription>
                        This privacy will appear on page
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
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
