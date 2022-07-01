import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Task from '../Task/Task';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const { data: ToDos, isLoading ,refetch} = useQuery('todo', () => fetch('https://dry-hollows-32703.herokuapp.com/toDo').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        fetch('https://dry-hollows-32703.herokuapp.com/toDo', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Successfully added!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    reset()
                    refetch()
                }
                else {
                    Swal.fire({
                        title: 'Faild to add!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                }
            })
    };


    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    return (
        <div className='h-screen'>

            <div className='grid justify-items-center'>
                <h1 className='text-2xl md:text-4xl text-center font-bold py-4'>What's your plan today?</h1>
                <form onSubmit={handleSubmit(onSubmit)} onKeyPress={handleKeypress}>
                    <label className="label">
                    </label>
                    <label className="input-group">
                        <input placeholder='Add Todo' type="text" className='input border-primary w-64 md:w-96' {...register("name", { required: true })} />
                        <input className='btn btn-primary' type="submit" value="To Do" />
                    </label>
                </form>
            </div>
            <div className='grid justify-items-center'>
                <h2 className='text-2xl text-center font-bold py-4'>To Do list</h2>
                {
                   ToDos.map(task => <Task key={task._id} task={task} refetch={refetch}></Task>)
                }
            </div>
        </div>
    );
};

export default Home;