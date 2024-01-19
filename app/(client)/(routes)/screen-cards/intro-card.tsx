'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

import Container from '@/components/container';
import ClientOnly from '@/components/client-only';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const Profile = ({ id }: { id: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <Container>
      <section className="justify-center hover:shadow-2xl">
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Image
            src={`/images/krishna.png`}
            alt=""
            onLoad={() => setIsLoaded(true)}
            width="300"
            height="300"
            className="bg-zinc-700 hover:bg-zinc-800 transition rounded-md"
          />
        </motion.div>
      </section>
    </Container>
  );
};

const IntroCard = () => {
  return (
    <>
      <ClientOnly>
        <Container>
          <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <div className="flex top-0 mx-auto max-w-[15750px] items-center justify-between flex-col lg:flex-row">
              <div className="text-white font-bold py-10 text-center space-y-5">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl space-y-5 font-extrabold">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -100 },
                      visible,
                    }}
                  >
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
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <div className="text-sm md:text-xl font-light text-zinc-400">
                    Create website using Reactjs/Nextjs much faster.
                  </div>
                </motion.div>
              </div>
              <div className="relative pt-[0.2rem] lg:pt-[2rem] transition-all duration-500">
                <>
                  {[1].map((image, idx) => (
                    <Profile key={idx} id={image} />
                  ))}
                </>
              </div>
            </div>
          </motion.article>
        </Container>
      </ClientOnly>
    </>
  );
};

export default IntroCard;
