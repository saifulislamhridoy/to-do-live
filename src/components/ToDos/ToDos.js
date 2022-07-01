import React from 'react';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import Task from '../Task/Task';

const ToDo = () => {
    const { data: ToDos, isLoading,refetch} = useQuery('todo', () => fetch('https://dry-hollows-32703.herokuapp.com/toDo').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid justify-items-center h-screen'>
                <h2 className='text-2xl text-center font-bold py-4'>To Do list</h2>
                {
                   ToDos.map(task => <Task key={task._id} task={task} refetch={refetch}></Task>)
                }
            </div>
    );
};

export default ToDo;