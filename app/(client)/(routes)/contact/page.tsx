'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

import {
  Form,
  FormControl,
  FormDescription,
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

const ContactPage = () => {
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
          <div
            className="
            pt-8
            pl-[2rem]
            pr-[2rem]
            sm:pl-[8rem]
            sm:pr-[8rem]
            md:pl-[4rem]
            md:pr-[4rem]
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
            <Input
              className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
              placeholder="Enter your name"
            />
            <Input
              className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
              placeholder="Enter your email"
            />
            <Textarea
              className="bg-zinc-300/50 dark:bg-zinc-600/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 p-8 text-sm"
              placeholder="Enter your messages"
              rows={5}
            />
          </div>
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
