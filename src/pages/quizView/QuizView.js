import React from 'react'
import Navbar from '../../sharedComponents/navbar/Navbar'
import "./styles/quizView.css"
import { motion } from "framer-motion";
import newIcon from "../../imageAssets/new+.png"
import playIcon from "../../imageAssets/playIcon.png"
import editIcon from "../../imageAssets/editIcon.png"
import reportIcon from "../../imageAssets/reportIcon.png"
import deleteIcon from "../../imageAssets/deleteIcon.png"


function QuizView() {
  return (
    <div className='quizView'>

        <Navbar />

        <div className="quizView_container">
            <div className="quizView_wrapper">
                <div className="quizView_title">YOUR QUIZZES</div>
                
                <div className="quizView_createQuizBtn">
                    <div className="quizView_createQuizBtn_iconSection">
                        <img src={newIcon} alt="" />
                    </div>
                    <div className="quizView_createQuizBtn_textSection"><p>Create a new quiz</p></div>
                </div>

                <div className="quizView_quizBtn">
                    <div className="quizView_quizBtn_iconSection">
                        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={playIcon} alt="" />
                    </div>
                    <div className="quizView_quizBtn_textSection"><p>Judendomen</p></div>
                    <div className="quizView_quizBtn_actionSection">
                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={editIcon} alt="" />
                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={reportIcon} alt="" />
                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.55 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={deleteIcon} alt="" />
                    </div>
                </div>


            </div>
        </div>
        
    </div>
  )
}

export default QuizView