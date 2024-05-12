import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteTodo } from '../redux/todoSlice';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { setTodos } from '../features/storage';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleDelete = (id: Todo['id']) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div>
      <div>
        <div>
          {todos.length > 0 &&
            todos.map((todo, i) => (
              <div className='rounded-lg p-3 bg-slate-200 mx-3 my-4' key={i}>
                <h1>
                  <span className='font-bold'>Title:</span> {todo.title}
                </h1>
                <p>
                  <span className='font-bold'>Description:</span>{' '}
                  {todo.description}
                </p>

                <div className='flex flex-row justify-start gap-5'>
                  <Link state={todo} to={`/todos/${todo.id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>

                  <p
                    className='cursor-pointer'
                    onClick={() => handleDelete(todo.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
