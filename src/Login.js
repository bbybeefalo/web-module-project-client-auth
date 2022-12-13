import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [creds, setCreds] = useState({
        username: '',
        password: ''
    });

    function handleChange(e) {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
        console.log(creds)
    }

    function login(e) {
        e.preventDefault();
        console.log(creds);
        axios.post('http://localhost:9000/api/login', creds)
            .then(res => { 
                localStorage.setItem('token', res.data.token)
                navigate('/friends')
             })
         
            .catch(err => console.log(err));
        setCreds({ username: '', password: '' });
    }


    return (
        <div className='form-container'>
            <h2>Log In</h2>
            <form>
                <input
                    onChange={handleChange}
                    type='text'
                    name='username'
                    value={creds.username}
                    placeholder='username'
                >
                </input>
                <input
                    onChange={handleChange}
                    type='text'
                    name='password'
                    value={creds.password}
                    placeholder='password'>
                </input>
            </form>
            <button onClick={login}>Log In</button>

        </div>
    )
}

export default Login