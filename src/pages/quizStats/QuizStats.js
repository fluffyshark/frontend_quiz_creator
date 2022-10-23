import React, { useState } from 'react'
import "./styles/quizStats.css"
import Navbar from '../../sharedComponents/navbar/Navbar'
import { motion } from "framer-motion"
import okIcon from "../../imageAssets/okIcon.png";
import crownIcon from "../../imageAssets/crownIcon.png"
import targetIcon from "../../imageAssets/targetIcon.png"
import wrongIcon from "../../imageAssets/wrongIcon.png"
import userIcon from "../../imageAssets/userIcon.png"
import questionIcon from "../../imageAssets/questionIcon.png"


// NEXT - ADD STUDENT & QUESTION COUNTER TEXT
// NEXT - CREATE EXAMPLE QUIZ
// NEXT - CONNECT WEBSITE WITH BUTTONS


function QuizStats() {

    const [students, setStudents] = useState([{name: "Robin Exampleson", correct: 121, wrong: 62, accuracy: 66}])
    const [quiz, setQuiz] = useState([{question: "Example question", correct: 33, wrong: 36, accuracy: 48}])

    // Separation of Framer Motion animation for buttons
    const btnMotion = {
        hover:{ scale: 1.1 },
        tap:{ scale: 0.85 },
        trans:{type: "spring", stiffness: 500, damping: 100}
    }


  return (
        <div className='quizStats'>
            <Navbar />
    
            <div className="quizStats_container">
                <div className="quizStats_wrapper">
                    
                    {/* Create questions section */}
    
                    <div className="quizStats_title">QUIZ REPORT</div>
                    
                    <div className="quizStats_overviewSection">
                        
                        <div className="quizStats_quizTitleContainer">
                            <div className="quizStats_quizTitle"><p id="quizStats_quizActualTitle">JUDENDOMEN</p><p id="quizStats_quizTitle_date">2022-10-23</p></div>
                            <motion.div whileHover={btnMotion.hover} whileTap={btnMotion.tap} transition={btnMotion.trans} className="quizStats_writeQuestion_save"></motion.div>
                        </div>
    
                        <div className="quizStats_overviewStats_row1">
                            
                            <div className="quizStats_overviewFields">
                                <div className="quizStats_overviewFields_correctbtn"><img src={crownIcon} alt="" /></div>
                                <div className="quizStats_overviewFields_statsFields"><p className="statsFields_title">TOTAL QUSTIONS ANSWERED</p><p className="statsFields_number">2543</p></div>
                            </div>
    
                            <div className="quizStats_overviewFields">
                                <div className="quizStats_overviewFields_correctbtn"><img src={targetIcon} alt="" /></div>
                                <div className="quizStats_overviewFields_statsFields"><p className="statsFields_title">ACCURACY</p><p className="statsFields_number">77%</p></div>
                            </div>
                        </div>
    
                        <div className="quizStats_overviewStats_row2">
                            <div className="quizStats_overviewFields">
                                <div className="quizStats_overviewFields_correctbtn"><img src={okIcon} alt="" /></div>
                                <div className="quizStats_overviewFields_statsFields"><p className="statsFields_title">ANSWERED CORRECT</p><p id='stats_correct' className="statsFields_number">1345</p></div>
                            </div>
    
                            <div className="quizStats_overviewFields">
                                <div className="quizStats_overviewFields_correctbtn"><img src={wrongIcon} alt="" /></div>
                                <div className="quizStats_overviewFields_statsFields"><p className="statsFields_title">ANSWERED INCORRECTLY</p><p id='stats_wrong' className="statsFields_number">530</p></div>
                            </div>
                        </div>
    
                    </div>
    
                    {/* All questions section */}
    
                    <div className="quizStats_questionTitle">STUDENT PERFORNACE</div>
    
                        <div className="quizStats_studentPerformanceSection">
                            
                            {students.map((student, i) => {
                                return (
                                    <div key={i} className="quizStats_statsDetails_detailbox">
                                        <div id='quizStats_studentReport_icon' className="quizStats_detailbox_icon"><img src={userIcon} alt="" /></div>
                                        <div className="quizStats_detailbox_questionText">{student.name}</div>
                                        <div className="quizStats_detailbox_iconbox">
                                            <div className='quizStats_detailbox_statsbox statsbox_correct'><p>{student.correct}</p></div>
                                            <div className='quizStats_detailbox_statsbox statsbox_wrong'><p>{student.wrong}</p></div>
                                            <div className='quizStats_detailbox_statsbox statsbox_accuracy'><p>{student.accuracy}%</p></div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                    </div>

                    {/* All questions section */}
    
                    <div className="quizStats_questionTitle">QUESTION BREAKDOWN</div>
    
                        <div className="quizStats_questionBreakdownSection">
                            
                            {quiz.map((question, i) => {
                                return (
                                    <div key={i} className="quizStats_statsDetails_detailbox">
                                        <div id='quizStats_questionBreakdown_icon' className="quizStats_detailbox_icon"><img src={questionIcon} alt="" /></div>
                                        <div className="quizStats_detailbox_questionText">{question.question}</div>
                                        <div className="quizStats_detailbox_iconbox">
                                            <div className='quizStats_detailbox_statsbox statsbox_correct'><p>{question.correct}</p></div>
                                            <div className='quizStats_detailbox_statsbox statsbox_wrong'><p>{question.wrong}</p></div>
                                            <div className='quizStats_detailbox_statsbox statsbox_accuracy'><p>{question.accuracy}%</p></div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                    </div>

    
                </div>
            </div>
    
        </div>
  )
}

export default QuizStats