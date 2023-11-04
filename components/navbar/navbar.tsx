'use client';

import { useEffect, useState } from 'react';

import { SafeUser } from '@/app/types';

import Container from '@/components/container';
import Logo from '@/components/logo';
import NavbarMenuItem from '@/components/navbar/navbar-menuitem';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileSidebar } from '@/components/navbar/navbar-mobilesidebar';
import { Separator } from '@/components/ui/separator';
import { ServerHeader } from '@/components/server/server-header';

const TOP_OFFSET = 66;

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-white dark:bg-zinc-700 z-10 shadow-sm ${
        showBackground ? 'bg-zinc-100 bg-opacity-90 transition-all' : ''
      }`}
    >
      <div
        className="
        py-1
        border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-2
            md:gap-0
            pr-3
            pl-3
          "
          >
            <div className="hidden md:block pt-1">
              <Logo />
            </div>

            <div className="pl-2 pt-1">
              <MobileSidebar />
            </div>

            <div className="pb-2 mt-auto flex items-center flex-row gap-2 pr-2 pt-1">
              <div className="pr-6">
                <NavbarMenuItem />
              </div>
              <div className="h-10 hidden md:block">
                <Separator orientation="vertical" />
              </div>

              <div className="flex flex-col">
                <ServerHeader currentUser={currentUser} />
              </div>
              <ModeToggle />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
