import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import UpdateClass from './UpdateClass';

function Classes() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/api/classes')
        .then(res => {
            setClasses(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {classes.map(c => (
                <div key={c.id}>
                    <h3>{c.name}</h3>
                    <Link to={`/classes/${c.id}`}>edit</Link>
                </div>
            ))}
        </div>
    );
};

export default Classes;