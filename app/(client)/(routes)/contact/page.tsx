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

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="pt-24">
          <div
            className="
           pt-8
           pl-2
           pr-2 
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
            pl-2
            pr-2 
            grid 
            grid-cols-1 
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-2
            gap-4
            "
          ></div>
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
