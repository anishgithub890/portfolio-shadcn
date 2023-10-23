'use client';

import { LayoutDashboard, LogIn, LogOut, PlusCircle } from 'lucide-react';
import { useCallback, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useModal } from '@/hooks/use-modal-store';
import { SafeUser } from '@/app/types';
import { UserAvatar } from '../user-avatar';
import { Separator } from '../ui/separator';
import { signOut } from 'next-auth/react';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineProfile } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';

interface ServerHeaderProps {
  currentUser?: SafeUser | null;
}

export const ServerHeader: React.FC<ServerHeaderProps> = ({ currentUser }) => {
  const { onOpen } = useModal();

  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);

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
              onClick={() => onOpen('createServer')}
            >
              <AiOutlineProfile className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => onOpen('editServer')}
            >
              <AiOutlineProfile className="mr-2 h-4 w-4" />
              <span>Edit Server</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="px-3 py-2 text-sm cursor-pointer"
              onClick={() => router.push('/billboards')}
            >
              <GiSkills className="mr-2 h-4 w-4" />
              <span>Create Skill</span>
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
              onClick={loginModal.onOpen}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Log in
              <LogIn className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={registerModal.onOpen}
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
