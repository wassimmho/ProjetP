import './Login.css'
import React from 'react'
import logo from './assets/Group 1.png'
function Login(){


    return<>
    <div className="container">
      <div id="left">
        <div>
            <img src={logo} alt="Logo" />
        </div>
      </div>
      <div id="right">
        <h1>Title</h1>
        <p>Description</p>
        <hr />
        <input type="text" placeholder="Enter Name..." />
        <input type="text" placeholder="Enter username..." />
        <input type="text" placeholder="Enter Email..." />
        <input type="text" placeholder="Enter Password..." />
        <p>
          <a href="#" className="textbut">Forgot Password?</a>
        </p>
        <button>Submit</button>
        <button>Cancel</button>
        <p>
        Can't sign in? Try <a href="#" className="textbut">resetting your password</a> or <a href="#" className="textbut">contact us</a> for assistance.
        </p>
      </div>
    </div>
    
    

    </>
}

export default Login