'use client';

import * as z from 'zod';
import qs from 'query-string';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import Container from '@/components/container';
import Footer from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Editor } from '@/components/editor';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required.',
  }),
  email: z.string().min(1, {
    message: 'email is required.',
  }),
  message: z.string().min(1, {
    message: 'message is required.',
  }),
});

const ContactPage = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: '/api/contacts',
      });
      await axios.post(url, values);

      // toast.success('thank you for your message');
      toast('Contact has been created', {
        description: 'thank you for your message',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="pt-14">
          <div className="pt-8 text-center flex-row">
            <p className="text-xl font-light text-muted-foreground text-zinc-500 dark:text-white">
              get in touch
            </p>
            <h2 className="text-5xl pt-1 font-bold tracking-tight text-zinc-900 dark:text-white">
              CONTACT
            </h2>
          </div>
          <div
            className="
              pt-8
              pl-8
              pr-8 
              grid 
              grid-cols-1 
              sm:grid-cols-1
              md:grid-cols-1
              lg:grid-cols-3
              xl:grid-cols-3
              2xl:grid-cols-3
              gap-4
            "
          >
            <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
              <div className="md:p-8 text-center md:text-left space-y-4">
                <span className="flex gap-4 dark:text-zinc-900">
                  <div className="absolute rounded-xl bg-slate-300 p-4">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <p className="p-4 break-all pl-[5rem]">+977-9845695512</p>
                </span>
              </div>
            </div>
            <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
              <div className="md:p-8 text-center md:text-left space-y-4">
                <span className="flex gap-4 dark:text-zinc-900">
                  <div className="absolute rounded-xl bg-slate-300 p-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="p-4 break-all pl-[5rem]">
                    anishgithub890@gmail.com
                  </p>
                </span>
              </div>
            </div>
            <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
              <div className="md:p-8 text-center md:text-left space-y-4">
                <span className="flex gap-4 dark:text-zinc-900">
                  <div className="absolute rounded-xl bg-slate-300 p-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="p-4 break-all pl-[5rem]">Kathmandu, Nepal</p>
                </span>
              </div>
            </div>
          </div>
          {/* contact form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-6"
            >
              <div
                className="
                  pt-8
                  pl-[0.5rem]
                  pr-[0.5rem]
                  sm:pl-[1rem]
                  sm:pr-[1rem]
                  md:pl-[1rem]
                  md:pr-[1rem]
                  grid 
                  grid-cols-1 
                  sm:grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-2
                  xl:grid-cols-2
                  2xl:grid-cols-2
                  gap-4
                  "
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          {...field}
                          className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage className="text-rose-600" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          {...field}
                          className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
                          placeholder="Enter your email"
                        />
                      </FormControl>
                      <FormMessage className="text-rose-600" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Editor {...field} />
                      </FormControl>
                      <FormMessage className="text-rose-600" />
                    </FormItem>
                  )}
                />

                <div
                  className="
                  pt-[0.4rem]
                  sm:pt-[0.2rem]
                  md:pt-[4.5rem]
                  "
                >
                  <Button
                    disabled={isLoading}
                    variant="primary"
                    className="p-6 text-lg"
                  >
                    SEND
                  </Button>
                </div>
              </div>
            </form>
          </Form>

          {/* footer-part */}
          <div className="pt-8">
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};
export default ContactPage;
