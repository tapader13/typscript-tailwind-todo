import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savetodo } from '../redux/todoSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const EditTodo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [titl, setTitl] = useState<Todo['title']>(location.state.title);
  const [desc, setDesc] = useState<Todo['description']>(
    location.state.description
  );
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      savetodo({ title: titl, description: desc, id: location.state.id })
    );
    setDesc('');
    setTitl('');
    navigate('/todos');
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
              value={titl}
              onChange={(e) => setTitl(e.target.value)}
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
            <button
              className=' bg-slate-700 px-4 py-[10px] text-white rounded-full font-semibold'
              type='submit'
            >
              Save Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
