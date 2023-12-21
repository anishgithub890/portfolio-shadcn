'use client';

import TypewriterComponent from 'typewriter-effect';

const IntroCard = () => {
  return (
    <>
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
          Create website using Reactjs/Nextjs faster.
        </div>

        {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
          javascript typescript required.
        </div> */}
      </div>
    </>
  );
};

export default IntroCard;
