import React from 'react'
import {Link} from 'react-router-dom';
function SignUp() {

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const respose = fetch('https://localhost:5000/api/createuser'),{
    method:'POST',

    
    header:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify()
  })
}
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className='form-label'>Name</label>
    <input type="text" className="form-control" />
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className='form-label'>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary m-3">Submit</button>
  <Link to='/login' className= 'm-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )
}

export default SignUp
