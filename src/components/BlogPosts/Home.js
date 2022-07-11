import React from 'react'
import './Home.css'
import BlogBody from './BlogBody'
import Header from './components/Header'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function Home() {
  return (


    <div className='grid-container'>

      <Header/>
      <div className='homeBodyContainer'>
      <LeftSideBar/>
      <BlogBody/>
      <RightSideBar/>
      </div>
    </div>
  )
}

export default Home