import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const UpdateModal = ({ updateToDo, setUpdateToDo, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { _id } = updateToDo
    const onSubmit = data => {
      fetch(`https://dry-hollows-32703.herokuapp.com/task/${_id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount >0){
            Swal.fire({
                title: 'Successfully Update!',
                icon: 'success',
                confirmButtonText: 'ok'
            })
            refetch()
            setUpdateToDo(null)
        }
      })
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setUpdateToDo(null)} for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} onKeyPress={handleKeypress}>
                        <label className="label">
                        </label>
                        <label className="input-group">
                            <input placeholder='Update Todo' type="text" className='input border-primary w-64 md:w-96' {...register("name", { required: true })} />
                            <input className='btn btn-primary' type="submit" value="Update" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;