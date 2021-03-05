import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import './ClassForms.css';

const initialCourse = {
    name: '',
    type: '',
    start_time: '',
    duration: '',
    intensity_level: '',
    location: '',
    registered: 0,
    max_class_size: 0
};
function UpdateClass() {
    const { push } = useHistory();
    const { id } = useParams();
    const [course, setCourse] = useState(initialCourse);

    useEffect(() => {
        axiosWithAuth().get(`/api/classes/${id}`)
        .then(res => {
            console.log(res)
            setCourse(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const handleChange = e => {
        setCourse({...course, [e.target.name]: e.target.value});
    };

    const handleUpdate = e => {
        e.preventDefault();
        axiosWithAuth().put(`/api/classes/${course.id}`, course)
        .then(res => {
            console.log(res);
            push('/instructorclasses');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='pagediv'>
          <h1>Edit Class</h1>
            <div className='formdiv'>
                <form onSubmit={handleUpdate} className='form'>
                    <label htmlFor='name' className='label'>Name of class:
                        <input
                        id='name'
                        name='name'
                        value={course.name}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='type' className='label'>Type of class:
                        <select id='type' name='type' 
                        value={course.type} 
                        onChange={handleChange}>
                            <option>Running</option>
                            <option>Calisthenics</option>
                            <option>Power Lifting</option>
                            <option>Boxing</option>
                            <option>Cycling</option>
                            <option>Weight Lifting</option>
                            <option>Yoga</option>
                            <option>Dancing</option>
                            <option>Crossfit</option>
                        </select>
                    </label>
                    <label htmlFor='start_time' className='label'>Start time:
                        <input
                        id='start_time'
                        name='start_time'
                        value={course.start_time}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='duration' className='label'>Duration:
                        <input
                        id='duration'
                        name='duration'
                        value={course.duration}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='intensity_level' className='label'>Intensity level:
                        <select id='intensity_level' name='intensity_level' 
                        value={course.intensity_level}
                        onChange={handleChange}>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </label>
                    <label htmlFor='location' className='label'>Location:
                        <input
                        id='location'
                        name='location'
                        value={course.location}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='registered' className='label'>Registered:
                        <input
                        type='number'
                        id='registered'
                        name='registered'
                        value={course.registered}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor='max_class_size' className='label'>Max class size:
                        <input
                        type='number'
                        id='max_class_size'
                        name='max_class_size'
                        value={course.max_class_size}
                        onChange={handleChange}
                        />
                    </label>
                    <button className='btn'>Update</button>
                </form>
        </div>
    </div>
    );
};

export default UpdateClass;