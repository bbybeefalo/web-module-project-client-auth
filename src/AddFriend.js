import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFriend() {

    const navigate = useNavigate();
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: null,
        email: ''
    });

    const handleChange = (e) => {
        console.log(newFriend);
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', newFriend, {
            headers: { authorization: token }
        },
        )

            .then(res => {
                console.log(res);
                navigate('/friends')
            })
            .catch(res => { console.log(err) })
    }

    return (
        <div>
            <h1>Add Friend</h1>
            <input
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange} />
            <input
                id="age"
                name="age"
                placeholder="Age"
                onChange={handleChange} />
            <input
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange} />

            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddFriend