import React from 'react'
import Navbar from './Navbar/Navbar'
import Discover from './Discover/Discover'
import Content from './maincontent/Content'
import Footer from './footer/Footer'

const AllComp = () => {
  return (
    <div>
      <Navbar/>
      <Discover/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default AllComp
