import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa'
import Swal from 'sweetalert2';
import UpdateModal from '../UpdateModal/UpdateModal';

const Task = ({ task, refetch }) => {
    const [confirm, setConfirm] = useState(false)
    const [updateToDo, setUpdateToDo] = useState(null)
    const { name, _id } = task
    const handleComplete = (task, id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Completed This Task!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dry-hollows-32703.herokuapp.com/complete`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ task })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            fetch(`https://dry-hollows-32703.herokuapp.com/delete/${id}`, {
                                method: "DELETE",
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.deletedCount > 0) {
                                        refetch()
                                        setConfirm(true)
                                        Swal.fire(
                                            'Completed',
                                            'Your task has been Completed.',
                                            'success'
                                        )
                                    }
                                })
                        }
                    })
                //     setConfirm(true)
                //   Swal.fire(
                //     'Completed',
                //     'Your task has been Completed.',
                //     'success'
                //   )
            }
            else {
                setConfirm(false)
            }
        })
    }

    return (
        <div className='flex items-center justify-between  bg-gradient-to-r from-primary via-purple-500 to-pink-500 m-2 rounded-lg w-4/5 md:w-2/5'>
            <div>
                <h2 className='text-white md:text-xl p-3'>{name}</h2>
            </div>
            <div className='flex items-center'>
                <label htmlFor="my-modal-3" ><FaRegEdit onClick={() => setUpdateToDo(task)} className=' text-white w-7 h-7 cursor-pointer mr-2' /></label>
                <input checked={confirm} onClick={() => handleComplete(name, _id)} className='text-white w-6 h-6 cursor-pointer mr-2' type="checkbox" name="" id="" />
            </div>
            {
                updateToDo && <UpdateModal refetch={refetch} updateToDo={updateToDo} setUpdateToDo={setUpdateToDo}></UpdateModal>
            }
        </div>
    );
};

export default Task;