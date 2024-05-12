import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navvar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <nav>
        <div className='flex flex-row justify-between md:px-10 bg-slate-700 text-white py-3 px-2'>
          <div>
            <h1
              onClick={() => {
                navigate('/');
                setMenuOpen(false);
              }}
              className='font-bold uppercase cursor-pointer'
            >
              Minhaj
            </h1>
          </div>
          <div className='ml-auto md:hidden cursor-pointer'>
            {/* {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} onClick={handleMenu} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
            )} */}
            <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
          </div>

          <div
            className={`fixed ${
              menuOpen ? '' : 'hidden'
            } inset-0 bg-slate-700 p-3 md:hidden `}
          >
            <div className='flex flex-row'>
              <div>
                <h1
                  onClick={() => {
                    navigate('/');
                    setMenuOpen(false);
                  }}
                  className='font-bold uppercase cursor-pointer'
                >
                  Minhaj
                </h1>
              </div>
              <div className='ml-auto md:hidden cursor-pointer'>
                <FontAwesomeIcon icon={faXmark} onClick={handleMenu} />
              </div>
            </div>
            <div className='md:hidden my-4 flex flex-col gap-3'>
              <Link
                className={`hover:bg-slate-600 p-1 rounded-[5px] ${
                  location.pathname === '/todos' ? 'bg-slate-600' : ''
                }`}
                to={'/todos'}
                onClick={handleMenu}
              >
                Todos
              </Link>
              <Link
                className={`hover:bg-slate-600 p-1 rounded-[5px] ${
                  location.pathname === '/addtodos' ? 'bg-slate-600' : ''
                }`}
                to={'/addtodos'}
                onClick={handleMenu}
              >
                Add Todos
              </Link>
            </div>
          </div>
          <div className='hidden md:flex gap-5'>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/addtodos'}>Add Todos</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navvar;
