'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex-row cursor-pointer">
      <MotionLink
        href="/"
        className="w-10 h-10 pl-[7px] bg-black text-white flex items-center rounded-full text-base font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: [
            '#121212',
            'rgb(131,58,180,1)',
            'rgb(253,29,29,1)',
            'rgb(252,176,69,1)',
            'rgb(131,58,180,1)',
          ],
          transition: { duration: 1, repeat: Infinity, scale: 1.1 },
        }}
      >
        AM
      </MotionLink>
    </div>
  );
};

export default Logo;
