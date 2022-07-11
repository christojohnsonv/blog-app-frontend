import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Authentication/Login';
import SignupForm  from './components/Authentication/Signup';
import Home from './components/BlogPosts/Home';
import './App.css'
import {OutlinedCard} from './components/Authentication/Signup';



const App = () => {

  return (
    <div className='appContainer'>
      <Router>
{/* 
        <Link to={'/login'}>Login Page</Link>
        <Link to={'/logout'}><button>Log out</button></Link> */}
        
        <Routes>
          <Route exact path='/login' element={<Login/>} component={Login}  />
          <Route exact path='/logout' render={()=><h1>Log out page.....</h1>}  />
          <Route exact path='/' element={<Home/>}  />
          <Route exact path='/user/:signup' element={<OutlinedCard/>} />
          <Route exact path='/user/' element={<OutlinedCard/>} />
          
{/* <SignupForm/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
