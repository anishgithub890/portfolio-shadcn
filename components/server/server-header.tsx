'use client';

import { GiSkills } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { AiOutlineProfile } from 'react-icons/ai';
import { MdEditNote } from 'react-icons/md';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SafeUser } from '@/app/types';
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Medal,
  PlusCircle,
  Users,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/user-avatar';
import { Separator } from '@/components/ui/separator';

import { useModal } from '@/hooks/use-modal-store';

interface ServerHeaderProps {
  currentUser?: SafeUser | null;
}

export const ServerHeader: React.FC<ServerHeaderProps> = ({ currentUser }) => {
  const { onOpen } = useModal();

  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full text-md font-semibold px-3 flex items-center h-12 transition">
          <div
            className="
              p-[0.35rem]
              border-[1px]
              border-zinc-[1px]
              dark:border-zinc-700
              dark:bg-zinc-900
              flex
              flex-row
              items-center
              gap-3
              rounded-md
              cursor-pointer
              dark:hover:bg-zinc-800
              hover:bg-zinc-100  
              transition
            "
          >
            <UserAvatar src={currentUser?.imageUrl} />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {currentUser?.role == 'user' ? (
          <>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              // onClick={() => onOpen('editUser')}
              onClick={() => 'editUser'}
            >
              <AiOutlineProfile className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : currentUser?.role == 'admin' ? (
          <>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => {}}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/adminusers')}
            >
              <Users className="mr-2 h-4 w-4" />
              <span>Manage Users</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/adminskills')}
            >
              <GiSkills className="mr-2 h-4 w-4" />
              <span>Manage Skills</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/adminexperiences')}
            >
              <Medal className="mr-2 h-4 w-4" />
              <span>Manage Experiences</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/admintestimonials')}
            >
              <MdReviews className="mr-2 h-4 w-4" />
              <span>Manage Testimonials</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/adminprojects')}
            >
              <GoProjectSymlink className="mr-2 h-4 w-4" />
              <span>Manage Projects</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/adminresume')}
            >
              <MdEditNote className="mr-2 h-4 w-4" />
              <span>Manage Resume</span>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              // onClick={loginModal.onOpen}
              onClick={() => onOpen('login')}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Log in
              <LogIn className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem
              // onClick={registerModal.onOpen}
              onClick={() => onOpen('createUser')}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Sign Up
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
