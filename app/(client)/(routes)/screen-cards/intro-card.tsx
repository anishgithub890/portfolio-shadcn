'use client';

import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';

const IntroCard = () => {
  return (
    <>
      <div className="flex top-0 mx-auto max-w-[15750px] items-center justify-between flex-col lg:flex-row">
        <div className="text-white font-bold py-10 text-center space-y-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl space-y-5 font-extrabold">
            <h1 className="text-zinc-700 dark:text-white">
              The Best Full-Stack Developer
            </h1>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                options={{
                  strings: ['MERN', 'Next.js', 'React.js'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-400">
            Create website using Reactjs/Nextjs much faster.
          </div>
        </div>
        <div className="relative pt-[0.2rem] lg:pt-[2rem] transition-all duration-500">
          <>
            {/* {[1].map((image, idx) => (
                // <Profile key={idx} id={image} />
              ))} */}
            <Image
              src={`/images/krishna.png`}
              alt="profile"
              sizes="500"
              width="300"
              height="300"
              className="bg-neutral-500 hover:bg-neutral-400 transition rounded-full"
            />
          </>
        </div>
      </div>
    </>
  );
};

export default IntroCard;
