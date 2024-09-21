import React from 'react'
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
  let value = 14;
  return (
    <div>

      <h1 style={{display:'block',padding:'50px 50%'}}> Header</h1>
        <Link to="/"> home </Link>  <br /><br />
        <Link to="/about"> About </Link>  <br /><br />
        {/* <Link to="/contact/123"> Contact </Link>  <br /><br /> */}
        <Link to={`/contact/${value}`}> Contact </Link>  <br /><br />
        <Outlet/>  
      <h1 style={{display:'block',padding:'50px 50%'}}>Footer</h1>
      
    </div>
  )
}

export default Home;
