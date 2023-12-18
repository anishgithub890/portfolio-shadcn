'use client';

import * as z from 'zod';
import qs from 'query-string';
import axios from 'axios';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone } from 'lucide-react';
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
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

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

      toast.success('Submitted! thank you for your valuable message');
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
              md:grid-cols-3
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
                    <Phone className="w-6 h-6" />
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
                  pl-[2rem]
                  pr-[2rem]
                  sm:pl-[2rem]
                  sm:pr-[2rem]
                  md:pl-[2rem]
                  md:pr-[2rem]
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
                        <Textarea
                          disabled={isLoading}
                          {...field}
                          className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
                          placeholder="Enter your messages"
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage className="text-rose-600" />
                    </FormItem>
                  )}
                />

                <div
                  className="
                  pt-[1rem]
                  sm:pt-[1rem]
                  md:pt-[5.8rem]
                  "
                >
                  <Button
                    disabled={isLoading}
                    variant="primary"
                    className="p-8 text-lg"
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
