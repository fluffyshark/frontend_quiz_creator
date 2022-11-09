import React from 'react'
import "./styles/loginView.css"
import loginUserIcon from "../../imageAssets/loginUserIcon.png"
import passwordIcon from "../../imageAssets/passwordIcon.png"

function LoginView() {
  return (
    <div className='loginView'>
        <div className="loginView_container">
            
            <div className="loginView_title"><p>Teacher Login</p></div>
            
            <div className="loginView_box">
                <div className="loginView_box_box">
                    <div className="loginView_box_IconContainer"><img src={loginUserIcon} alt="" /></div>
                    <input type="text" placeholder='Email...' />
                </div>
            </div>

            <div className="loginView_box">
                <div className="loginView_box_box">
                    <div className="loginView_box_IconContainer"><img src={passwordIcon} alt="" /></div>
                    <input type="text" placeholder='Password...' />
                </div>
            </div>

            <div className="loginView_login_box">
                <div className="loginView_loginBtn"><p>Login</p></div>
            </div>
            

        </div>
    </div>
  )
}

export default LoginView