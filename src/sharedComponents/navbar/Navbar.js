import React from 'react'
import "./styles/navbar.css"

function Navbar() {


    function handleClick(btn) {
        document.getElementById("navbar_quizBtn").style.backgroundColor = "#ffffff"
        document.getElementById("navbar_dashboardBtn").style.backgroundColor = "#ffffff"

        if (btn === "quizbtn") {
            document.getElementById("navbar_quizBtn").style.backgroundColor = "#d9d9d9"
        }
        if (btn === "dashboardbtn") {
            document.getElementById("navbar_dashboardBtn").style.backgroundColor = "#d9d9d9"
        }
    }


  return (
    <div className='navbar'>
        <div onClick={() => {handleClick("quizbtn")}} id="navbar_quizBtn" className="navbar_quizBtn">QUIZ</div>
        <div onClick={() => {handleClick("dashboardbtn")}} id="navbar_dashboardBtn" className="navbar_dashboardBtn">DASHBOARD</div>
    </div>
  )
}

export default Navbar

