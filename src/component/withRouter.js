import React from 'react'

import { useParams } from 'react-router-dom';

 const withRouter =(WrappedComponent) => props => {

    const param=useParams();

  return <WrappedComponent {...props} param ={param} />
}
export default withRouter;


// kisi bhi componenet k param/prop ko ek page se dusra page p send krna k liye