import React, {useContext} from 'react'
import '../components/Header.css'
import { Routes, Link } from 'react-router-dom'




function Header(props) {

  return (
    <div className='header-conatiner col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-between' >
        <h1 className='header-title col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>My Scripts</h1>
        {/* <Routes> */}
        <div className='userAuth col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-between'>
            {/* <Link to={'/signup'} ></Link> */}
            <Link className='loginLink  ' to={props.data ? '/user/' : '/user/:signup' } >{props.data ? 'Login' : 'Signup'}</Link>


            {/* <img className='userImage' src="https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png" alt="User" /> */}

        </div>
        {/* </Routes> */}
    </div>
  )
}

export default Header