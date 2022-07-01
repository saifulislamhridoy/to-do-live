import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className='grid justify-items-center'>
            <h2 className='text-2xl font-bold p-4'>This is Calender</h2>
            <div className='border-2'>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>
            <p className='py-5 text-xl font-bold'>Selected Date to <span className='text-primary'>{format(selected, "PP")}</span></p>
        </div>
    );
};

export default Calender;