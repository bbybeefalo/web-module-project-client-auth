import axios from "axios";
import React, { useState, useEffect } from "react";

function FriendList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends', {headers: {authorization: token}})
        .then(res => {setFriends(res.data)})
        .catch(err => {console.log(err)})
    }, []);


    return(
        <div className='friend-list'>
            <h1>Friend List</h1>
            {
                friends.map(friend => {
                    return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
        </div>
    )
}

export default FriendList