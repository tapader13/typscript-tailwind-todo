import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodos } from '../redux/todoSlice';
import { motion } from 'framer-motion';
const NewTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<Todo['title']>('');
  const [desc, setDesc] = useState<Todo['description']>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addtodos({ title, description: desc }));
    setDesc('');
    setTitle('');
  };
  return (
    <div className=' p-5 sm:flex sm:justify-center  '>
      <div className=' mt-10 sm:min-w-[500px] rounded-lg bg-slate-200 p-[20px]'>
        <form onSubmit={handleSubmit}>
          <div className=' my-3 flex flex-row justify-between'>
            <label className=' font-bold' htmlFor=''>
              Title
            </label>
            <input
              className=' p-[5px] focus:outline-none'
              type='text'
              name=''
              id=''
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=' my-3 flex flex-row justify-between'>
            <label className=' font-bold' htmlFor=''>
              Description
            </label>
            <textarea
              className='  p-[5px] focus:outline-none'
              name=''
              id=''
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className=' flex justify-center mt-7'>
            <motion.button
              whileDrag={{ scale: 1.2 }}
              drag='x'
              dragConstraints={{ left: -0, right: 0 }}
              dragElastic={true}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              className=' bg-slate-700 px-4 py-[10px] text-white rounded-full font-semibold'
              type='submit'
            >
              Add Todo
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTodo;
