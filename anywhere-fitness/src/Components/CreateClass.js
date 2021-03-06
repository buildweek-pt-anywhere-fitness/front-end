import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function CreateClass() {
    const { push } = useHistory();

    const [classInfo, setClassInfo] = useState({
        name: '',
        type: '',
        start_time: '',
        duration: '',
        intensity_level: '',
        location: '',
        registered: 0,
        max_class_size: 0
    });

    const handleChange = e => {
        setClassInfo({...classInfo, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/classes', classInfo)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
        push('/instructorclasses');
    };

    return (
        <div>
            <h2>New Class</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name of class:
                    <input
                    id='name'
                    name='name'
                    value={classInfo.name}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='type'>Type of class:
                    <select id='type' name='type' 
                    value={classInfo.type} 
                    onChange={handleChange}>
                        <option>Running</option>
                        <option>Calisthenics</option>
                        <option>Power Lifting</option>
                        <option>Boxing</option>
                        <option>Cycling</option>
                        <option>Weight Lifting</option>
                        <option>Yoga</option>
                        <option>Dancing</option>
                    </select>
                </label>
                <label htmlFor='start_time'>Start time:
                    <input
                    id='start_time'
                    name='start_time'
                    value={classInfo.start_time}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='duration'>Duration:
                    <input
                    id='duration'
                    name='duration'
                    value={classInfo.duration}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='intensity_level'>Intensity level:
                    <select id='intensity_level' name='intensity_level' 
                    value={classInfo.intensity_level}
                    onChange={handleChange}>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </label>
                <label htmlFor='location'>Location:
                    <input
                    id='location'
                    name='location'
                    value={classInfo.location}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='registered'>Registered:
                    <input
                    type='number'
                    id='registered'
                    name='registered'
                    value={classInfo.registered}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='max_class_size'>Max class size:
                    <input
                    type='number'
                    id='max_class_size'
                    name='max_class_size'
                    value={classInfo.max_class_size}
                    onChange={handleChange}
                    />
                </label>
                <button>Create class</button>
            </form>
        </div>
    );
};

export default CreateClass;