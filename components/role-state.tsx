'use client';

import { useRouter } from 'next/navigation';

import CustomeButton from './custome-button';
import Image from 'next/image';
import { Heading } from './ui/heading';

interface RoleStateProps {
  title?: string;
  description?: string;
}

const RoleState: React.FC<RoleStateProps> = ({
  title = "OOOPS! It's Empty",
  description = "Looks like you haven't added any data yet...!!!",
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2
        justify-center 
        items-center
        pt-[12rem]
      "
    >
      <Image
        src="/images/unauthorized.png"
        alt="unauthorized"
        width={300}
        height={300}
      />
      <Heading center title={title} description={description} />
      <div className="w-48 mt-4">
        <CustomeButton outline label="Home" onClick={() => router.push('/')} />
      </div>
    </div>
  );
};

export default RoleState;
