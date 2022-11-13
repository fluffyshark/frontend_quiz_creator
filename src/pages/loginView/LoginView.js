import React, { useContext, useEffect, useState } from 'react'
import "./styles/loginView.css"
import loginUserIcon from "../../imageAssets/loginUserIcon.png"
import passwordIcon from "../../imageAssets/passwordIcon.png"
import { AuthContext } from '../../sharedComponents/context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginView({getUserCredentials}) {

    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined
    })

    const {loading, error, dispatch} = useContext(AuthContext)
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        // Send credentials to use for fetching user from database
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
        // Send credentials to App.js to be used in QuizView
        getUserCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8800/server/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
            navigate("/quizview")
        } catch(err) {
            dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
        }
    }


    return (
        <div className='loginView'>
            <div className="loginView_container">
                
                <div className="loginView_title"><p>Teacher Login</p></div>
                
                <div className="loginView_box">
                    <div className="loginView_box_box">
                        <div className="loginView_box_IconContainer"><img src={loginUserIcon} alt="" /></div>
                        <input id="username" type="text" placeholder='Email...' onChange={handleChange} />
                    </div>
                </div>

                <div className="loginView_box">
                    <div className="loginView_box_box">
                        <div className="loginView_box_IconContainer"><img src={passwordIcon} alt="" /></div>
                        <input id="password" type="password" placeholder='Password...' onChange={handleChange}/>
                    </div>
                </div>

                <div disabled={loading} className="loginView_login_box">
                    <div className="loginView_loginBtn" onClick={handleClick}><p>Login</p></div>
                </div>
                {error && <span>{error.message}</span>}

            </div>
        </div>
    )
}

export default LoginView