// import React from 'react'
import './Signup.css'
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { signUpUrl } from '../../constants';
import Header from '../BlogPosts/components/Header';
import { Link } from 'react-router-dom'
import {useParams } from 'react-router-dom';

export const OutlinedCard = (props)=> {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  console.log("is lofin true",props.component)
  let { signup } = useParams()
  
  const submit = ()=>{
    console.log(email)
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/.test(email)))
        {
            alert("Email Not valid");
            return 
        }
    if (password.trim().length < 8){
      alert('Invalid Password')
    }
    console.log(signUpUrl)
    axios({
      method:"post",
      url:signUpUrl,
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // },
    // withCredentials: true,
      data:{"email": email, "password": password}
    }).then(response=>{
      console.log(response)
    })
  }


  return (
    <div >
      <Header data={signup}/>
        <Box className='mainContainer w-25 col-12 col-sm-12 col-md-10 col-lg-6 col-xl-4'
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: 'calc(100% - 16px)' },

        }}
        noValidate
        autoComplete="off"
        >   

        <h3 className='textSignUp d-flex justify-content-center' > {signup ? 'Sign Up': 'Login' }</h3>
        <div className="formFields mt-5 mb-5 col-12 col-sm-12 col-md-10 col-lg-6 col-xl-4">
        <TextField className='textField outlined-basic w-100' 
            onChange={(email)=>{
              setEmail(email.target.value)
            }} 
            label="Email" variant="outlined" />
            <br />
            <TextField className='textField textInputBox w-100 mt-2' type="password" id="outlined-basic"
            onChange={(password)=>{
              setPassword(password.target.value)
            }} 
            label="Password" variant="outlined" />
            <CardActions className='d-flex justify-content-center'>
            <Button onClick={submit} className='signupButton mt-5' variant="outlined" >{signup ? "Sign UP" : "Login"}</Button>
            </CardActions>
            <div className='d-flex justify-content-center'>
            <Link to={signup ? '/user/' : '/user/:signup' } >{signup ? "Already have an account? Login" : "Don't have an account? Sign Up"}</Link>
            </div>
        </div>
        </Box>
        
    </div>
  );
}