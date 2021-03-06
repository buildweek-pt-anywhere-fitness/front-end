import React, { state, setState, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


export default function Login() {
    const history = useHistory()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        axiosWithAuth().post('https://api-anywhere-fitness.herokuapp.com/api/users/login', form)
            .then(res => {
                console.log(res.data)
                if(res.cookies.token) {
                    localStorage.setItem('token', res.data.token)
                    history.push('/instructorclasses')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

return (
    <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
            name='username'
            type='textbox'
            placeholder='Username'
            onChange={handleChange}
            value={form.username}
        />
        <label>Password:</label>
        <input
            name='password'
            type='textbox'
            placeholder='Password'
            onChange={handleChange}
            value={form.password}
        />
        <button>Login</button>
    </form>
)
}