import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function Instructor() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/api/classes')
        .then(res => {
            console.log(res)
            setClasses(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    const deleteClass = (classId) => {
        axiosWithAuth().delete(`https://api-anywhere-fitness.herokuapp.com/api/classes/${classId}`)
            .then(res => {
                console.log(res)
                setClasses(classes.filter(c => c.id != classId))
            })
        .catch(err => console.log(err))
    }

    
    return (
        <div>
             <Link to='/newclass'>Add class</Link>
            {classes.map(c => (
                <div key={c.id}>
                    <h3>{c.name}</h3>
                    <p>{c.type}</p>
                    <p>{c.intensity_level}</p>
                    <p>Begins: {c.start_time}</p>
                    <p>Lasts: {c.duration}</p>
                    <p>Location: {c.location}</p>
                    <p>Registered: {c.registered}</p>
                    <p>Max class size: {c.max_class_size}</p>
                    <Link to={`/instructorclasses/${c.id}`}>edit</Link>
                    <button onClick={() => deleteClass(c.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Instructor;