import React from 'react';

const HomeComp = () => {
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
              <button className=' bg-blue-700 text-white rounded-lg py-2 text-xl font-bold sm:px-2'>
                Download now
              </button>
              <button className=' bg-white text-black rounded-lg py-2 text-xl font-bold sm:px-3'>
                Read Docs
              </button>
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
      </div>
    </div>
  );
};

export default HomeComp;
