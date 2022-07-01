import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const CompleteTask = () => {
    const { data: completedTask, isLoading ,refetch} = useQuery('todo', () => fetch('https://dry-hollows-32703.herokuapp.com/completed').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='h-screen grid justify-items-center'>
            <h2 className='text-2xl font-bold text-center py-4'>Completed Task List</h2>
            {
                completedTask.map(completed => <>
                <div className='bg-success mb-2 rounded-lg w-4/5 h-12 md:w-2/5 flex justify-between items-center'>
                    <h2 className='text-white p-2'>{completed.task}</h2>
                    <p className='text-primary p-2'>Completed</p>
                </div>
                </>)
            }
        </div>
    );
};

export default CompleteTask;