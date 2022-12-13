import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './Login';
import FriendList from './FriendList'
import AddFriend from './AddFriend';
import Logout from './Logout'

function App() {
  return (
    <div className="App">

      <Link className='navlink' to='/'>Home</Link>
      <Link className='navlink' to='/login'>Login</Link>
      <Link className='navlink' to='/friends'>Friends</Link>
      <Link className='navlink' to='/friends/add'>Add Friend</Link>
      <Link className='navlink' to='/logout'>Logout</Link>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/friends' element={<FriendList />} />
        <Route exact path='/friends/add' element={<AddFriend />} />
        <Route exact path ='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
