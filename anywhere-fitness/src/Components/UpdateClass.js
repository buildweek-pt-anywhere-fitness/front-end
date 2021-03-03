import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

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
            push('/classes');
            // setCourse(res.data);
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
        <form onSubmit={handleUpdate}>
            <label htmlFor='name'>Name of class:
                <input
                id='name'
                name='name'
                value={course.name}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='type'>Type of class:
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
                </select>
            </label>
            <label htmlFor='start_time'>Start time:
                <input
                id='start_time'
                name='start_time'
                value={course.start_time}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='duration'>Duration:
                <input
                id='duration'
                name='duration'
                value={course.duration}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='intensity_level'>Intensity level:
                <select id='intensity_level' name='intensity_level' 
                value={course.intensity_level}
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
                value={course.location}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='registered'>Registered:
                <input
                type='number'
                id='registered'
                name='registered'
                value={course.registered}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='max_class_size'>Max class size:
                <input
                type='number'
                id='max_class_size'
                name='max_class_size'
                value={course.max_class_size}
                onChange={handleChange}
                />
            </label>
            <button>Update</button>
        </form>
    </div>
    );
};

export default UpdateClass;