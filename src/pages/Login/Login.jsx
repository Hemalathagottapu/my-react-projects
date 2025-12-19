import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="login-page">
      <form action="" className="login-form d-flex flex-column row-gap-2 justify-content-center">
        <h2>please Login</h2>
        <div className="form-floating mb-3">
            <label For="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-floating">
            <label For="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
