import React from 'react'
import Navbar from '../../sharedComponents/navbar/Navbar'
import "./styles/quizCreateView.css"
import saveIcon from "../../imageAssets/saveIcon.png"
import okIcon from "../../imageAssets/okIcon.png"
import noSelectIcon from "../../imageAssets/noSelectIcon.png"
import small_copyIcon from "../../imageAssets/small_copyIcon.png"
import small_editIcon from "../../imageAssets/small_editIcon.png"
import small_deleteIcon from "../../imageAssets/small_deleteIcon.png"

function QuizCreateView() {
  return (
    <div className='quizCreateView'>
        <Navbar />

        <div className="quizCreateView_container">
            <div className="quizCreateView_wrapper">
                
                {/* Create questions section */}

                <div className="quizCreateView_title">CREATE  QUIZ</div>
                
                <div className="quizCreateView_createSection">
                    
                    <div className="quizCreateView_writeQuestion">
                        <input type="text" placeholder='Write a question...' />
                        <div className="quizCreateView_writeQuestion_save"><img src={saveIcon} alt="" /></div>
                    </div>

                    <div className="quizCreateView_writeAnswers_row1">
                        <div className="quizCreateView_writeAnswers">
                            <div className="quizCreateView_writeAnswers_correctbtn"><img src={noSelectIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' /> 
                        </div>

                        <div className="quizCreateView_writeAnswers">
                            <div className="quizCreateView_writeAnswers_correctbtn"><img src={noSelectIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' /> 
                        </div>
                    </div>

                    <div className="quizCreateView_writeAnswers_row2">
                        <div className="quizCreateView_writeAnswers">
                            <div className="quizCreateView_writeAnswers_correctbtn"><img src={noSelectIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' /> 
                        </div>

                        <div className="quizCreateView_writeAnswers">
                            <div className="quizCreateView_writeAnswers_correctbtn"><img src={noSelectIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' /> 
                        </div>
                    </div>

                </div>

                {/* All questions section */}

                <div className="quizCreateView_questionTitle">ALL QUESTIONS</div>

                <div className="quizCreateView_allQuestionsSection">
                    
                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                    <div className="quizCreateView_allQuestions_questionbox">
                        <div className="quizCreateView_questionbox_number">1.</div>
                        <div className="quizCreateView_questionbox_questionText">När dog Gustav Vasa?</div>
                        <div className="quizCreateView_questionbox_iconbox">
                            <img src={small_editIcon} alt="" />
                            <img src={small_copyIcon} alt="" />
                            <img src={small_deleteIcon} alt="" />
                        </div>
                    </div>

                </div>


            </div>
        </div>

    </div>
  )
}

export default QuizCreateView