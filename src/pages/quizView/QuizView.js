import React, { useState } from 'react'
import Navbar from '../../sharedComponents/navbar/Navbar'
import "./styles/quizView.css"
import { motion } from "framer-motion";
import newIcon from "../../imageAssets/new+.png"
import playIcon from "../../imageAssets/playIcon.png"
import editIcon from "../../imageAssets/editIcon.png"
import reportIcon from "../../imageAssets/reportIcon.png"
import deleteIcon from "../../imageAssets/deleteIcon.png"


function QuizView() {

    const [reportToggle, setReportToggle] = useState(false)

    function toggleReportContainer() {
        if (reportToggle) {
            document.getElementById("quizView_quizBtn_reportcard_container").style.height = "120px"
            setReportToggle(false)
      
        } else {
            document.getElementById("quizView_quizBtn_reportcard_container").style.height = "0px"
            setReportToggle(true)
        }
    }


  return (
    <div className='quizView'>

        <Navbar />

        <div className="quizView_container">
            <div className="quizView_wrapper">
                <div className="quizView_title">YOUR QUIZZES</div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="quizView_createQuizBtn">
                    <div className="quizView_createQuizBtn_iconSection">
                        <img src={newIcon} alt="" />
                    </div>
                    <div className="quizView_createQuizBtn_textSection"><p>Create a new quiz</p></div>
                </motion.div>

                <div className="quizView_quizBtn_container" >
                
                    <div className="quizView_quizBtn">
                        <div className="quizView_quizBtn_iconSection">
                            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={playIcon} alt="" />
                        </div>
                        <div className="quizView_quizBtn_textSection"><p>Judendomen</p></div>
                        <div className="quizView_quizBtn_actionSection">
                            <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={editIcon} alt="" />
                            <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => {toggleReportContainer(setReportToggle(true))}} src={reportIcon} alt="" />
                            <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={deleteIcon} alt="" />
                        </div>
                    </div>
                
                    <div id="quizView_quizBtn_reportcard_container" className="quizView_quizBtn_reportcard_container">
                        <div className="quizView_quizBtn_reportcard"><p>Report</p><p>2022-09-30</p></div>
                       
                    </div>
                </div>

                


            </div>
        </div>
        
    </div>
  )
}

export default QuizView