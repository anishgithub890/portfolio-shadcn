import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

import ClientOnly from '@/components/client-only';
import Navbar from '@/components/navbar/navbar';
import ToasterProvider from '@/components/providers/toaster-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';

import getCurrentUser from './actions/getCurrentUser';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(`http://localhost:3000`),
  title: {
    default: 'Anish | Mahato',
    template: `%s | Anish`,
  },
  description: 'Anish portfolio create by next app',
  verification: {
    google: 'google-site-verification=123123123',
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={false}
            storageKey="next-portfolio"
            disableTransitionOnChange
          >
            <ClientOnly>
              <ModalProvider />
              <ToasterProvider />
              <Toaster />
              <Navbar currentUser={currentUser} />
              {children}
            </ClientOnly>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
