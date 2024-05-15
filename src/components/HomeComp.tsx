import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const HomeComp = () => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setTimeout(() => setVal(true), 10000);
  });
  const variant1 = {
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };
  const variant2 = {
    show: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const [open, setOpen] = useState(false);
  const handleBtn = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className='bg-cover bg-center bg-no-repeat'>
          <img
            className='w-full'
            src='https://www.getvisible.com/wp-content/uploads/HERO-sections.jpg'
            alt=''
          />
        </div>
        <div>
          <div className='bg-gradient-to-r from-orange-50 to-orange-100  px-4 py-12'>
            <div className=' pb-5'>
              <h1 className=' font-bold text-4xl sm:w-1/2 sm:text-center sm:mx-auto'>
                Web app to desktop app in minutes
              </h1>
              <p className=' mt-4 text-2xl font-meduim sm:w-3/4 sm:text-center sm:mx-auto'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                animi vero expedita eius commodi quod totam repellendus.
              </p>
            </div>
            <div className=' flex flex-col gap-3 sm:flex sm:flex-row sm:justify-center'>
              <motion.button
                whileHover={{ scale: [null, 1.2, 1.1], rotate: [0, 10, 0] }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.8 }}
                className=' bg-blue-700 text-white rounded-lg py-2 text-xl font-bold sm:px-2'
              >
                Download now
              </motion.button>
              <motion.button className=' bg-white text-black rounded-lg py-2 text-xl font-bold sm:px-3'>
                Read Docs
              </motion.button>
            </div>
          </div>
        </div>
        <div>
          <div className=' flex justify-center m-5'>
            <div className=' grid grid-cols-3 grid-rows-4  gap-2 h-[700px] w-[600px]'>
              <div className=' col-start-1 col-end-3 '>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div className=' col-start-3 col-end-4 row-start-1 row-end-3'>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div className=' col-start-1 col-end-2 row-start-2 row-end-4'>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div className=' col-start-1 col-end-3 row-start-4 row-end-5'>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div className=' col-start-2 col-end-4 row-start-3 row-end-4'>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
              <div>
                <img
                  className='h-full w-full rounded-lg hover:outline-2 hover:outline shadow-2xl hover:brightness-50 hover:transition hover:duration-700 hover:ease-in-out'
                  src='https://buffer.com/library/content/images/2023/10/free-images.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <motion.h1
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 360],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className=' text-center p-10 text-4xl font-bold'
            >
              Framer Motion
            </motion.h1>
            <div>
              <div className=' w-full h-4 bg-black my-5'>
                <motion.div
                  className=' bg-green-500 text-center w-1/12 h-full'
                  animate={{ width: '80%' }}
                  transition={{ ease: 'easeOut', duration: 5 }}
                ></motion.div>
              </div>
            </div>
            <div className='w-32 rounded-full h-32 bg-black  mx-auto'>
              <AnimatePresence>
                {!val && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: [0, 100, 0, 0],
                      y: [0, 0, 100, 0],
                    }}
                    exit={{ opacity: 0, y: 1000 }}
                    transition={{
                      ease: 'easeOut',
                      duration: 2,
                    }}
                    className='w-24 rounded-full h-24 bg-white'
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <motion.div
              className='my-5 bg-black w-40 h-40'
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            /> */}
            <motion.div
              animate={open ? 'show' : 'hidden'}
              className='my-5  px-10 text-center'
            >
              <motion.div
                variants={variant1}
                className=' flex flex-row flex-wrap justify-between'
              >
                <motion.div
                  variants={variant2}
                  className='w-[300px] bg-green-300 p-5 rounded-lg'
                >
                  <div>
                    <h1>Minhaj</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam optio asperiores eius. Ab illum obcaecati laudantium
                      ullam. Error, maiores perferendis?
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={variant2}
                  className='w-[300px]  bg-red-300 p-5 rounded-lg'
                >
                  <div>
                    <h1>Miftah</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam optio asperiores eius. Ab illum obcaecati laudantium
                      ullam. Error, maiores perferendis?
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={variant2}
                  className='w-[300px] bg-cyan-300 p-5 rounded-lg'
                >
                  <div>
                    <h1>Mizan</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam optio asperiores eius. Ab illum obcaecati laudantium
                      ullam. Error, maiores perferendis?
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={variant2}
                  className='w-[300px] bg-orange-300 p-5 rounded-lg'
                >
                  <div>
                    <h1>Marzan</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam optio asperiores eius. Ab illum obcaecati laudantium
                      ullam. Error, maiores perferendis?
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <button
                onClick={handleBtn}
                className='bg-green-400 py-2 px-8 rounded-lg '
              >
                {open ? 'Hide' : 'Show'}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
