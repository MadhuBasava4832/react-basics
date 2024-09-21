import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {

  const {id} = useParams();
  console.log(id);
  

  return (
    <div>
      <h1>Contact page</h1>

    </div>
  )
}

export default Contact;
