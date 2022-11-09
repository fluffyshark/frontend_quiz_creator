import React, { useEffect, useState } from 'react'
import Navbar from '../../sharedComponents/navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../sharedComponents/hooks/useFetch';
import "./styles/quizCreateView.css"
import { motion } from "framer-motion";
import okIcon from "../../imageAssets/okIcon.png";
import wrongIcon from "../../imageAssets/wrongIcon.png";


function QuizCreateView() {

    const [correctAnswers, setCorrectAnswers] = useState([0,0,0,0])
    const [questionText, setQuestionText] = useState("")
    const [answerAlt, setAnswerAlt] = useState([])
    const [quiz, setQuiz] = useState([{question: "No questions yet"}])
    const [quizQustion, setQuizQuestion] = useState({id: 0, question: "", correct: [], answerAlt1: "", answerAlt2: "", answerAlt3: "", answerAlt4: ""})
    const [edit, setEdit] = useState({})

    const location = useLocation()
    let quizID = location.pathname.split("/")[2]

    let navigate = useNavigate()
    // NEXT - RESTRICT SAVE IF QUESTION HAS NOO QUESTION TEXT OR ONE CORRECT ANSWER
    // NEXT - WRITE ERROR MESSAGE IN RED WHEN QUESTION IN NOT CORRECTLY DONE
    // NEXT - ROTATE QUESTION LIST SO NEWEST CREATED QUESTION IS IN THE TOP
    // NEXT - ADD CORRECT QUIZ DATA IF EDIT QUIZ
    // NEXT - CREATE A LOGIN PAGE AND SEND DATA FROM THERE

    const {data, loading, error} = useFetch(`http://localhost:8800/server/quiz/${quizID}`)
    console.log(data)

    /*
    if (location ==! "/createquiz") {
            const {data, loading, error} = useFetch(`http://localhost:8800/server/quiz/${quizID}`)
            let quizID = location.pathname.split("/")[2]
    }
    */
    
    // Add question text input to state: questionText
    const questionTextInput = event => {setQuestionText(event.target.value)};
    
    // Add answerAlt input to state: answerAlt
    const answerAltInput = index => e => {let newArr = [...answerAlt]; newArr[index] = e.target.value; setAnswerAlt(newArr)}

    // Add correct or wrong answer alternative input to state: correctAnswers
    function selectCorrect(answerAlt) {
        const selectedAnswers = [0,0,0,0]
        
        if (answerAlt === 0 && correctAnswers[0] === 0) {selectedAnswers[0] = 1; document.getElementById("firstAltImg").src = okIcon} else if (answerAlt === 0 && correctAnswers[0] === 1) {selectedAnswers[0] = 0; document.getElementById("firstAltImg").src = wrongIcon}
        if (answerAlt === 1 && correctAnswers[1] === 0) {selectedAnswers[1] = 1; document.getElementById("secondAltImg").src = okIcon} else if (answerAlt === 1 && correctAnswers[1] === 1) {selectedAnswers[1] = 0; document.getElementById("secondAltImg").src = wrongIcon}
        if (answerAlt === 2 && correctAnswers[2] === 0) {selectedAnswers[2] = 1; document.getElementById("thirdAltImg").src = okIcon} else if (answerAlt === 2 && correctAnswers[2] === 1) {selectedAnswers[2] = 0; document.getElementById("thirdAltImg").src = wrongIcon}
        if (answerAlt === 3 && correctAnswers[3] === 0) {selectedAnswers[3] = 1; document.getElementById("fouthAltImg").src = okIcon} else if (answerAlt === 3 && correctAnswers[3] === 1) {selectedAnswers[3] = 0; document.getElementById("fouthAltImg").src = wrongIcon}

        setCorrectAnswers(selectedAnswers)
    }



    const saveQuestion = () => {
        
        // Remove "No questions yet" from quiz state
        setQuiz(quiz.filter(item => item.question !== "No questions yet"));

        // If this question is an edit, then remove old question that will be replaced
        if (edit.hasOwnProperty("question") ) {
            setQuiz(quiz.filter(item => item.id !== edit.id));
        }


        // Give question a id
        const id = Math.floor(Math.random() * 100000000);
        let newArr = quizQustion
        newArr.id = id
        setQuizQuestion(newArr)

        
        // Add questionText, answerAlt, correctAnswers to quizQustion
        setQuiz(quiz => [...quiz, quizQustion]);

        document.getElementById("questionInput").value = ""
        document.getElementById("answerAlt1").value = ""
        document.getElementById("answerAlt2").value = ""
        document.getElementById("answerAlt3").value = ""
        document.getElementById("answerAlt4").value = ""

        document.getElementById("firstAltImg").src = wrongIcon
        document.getElementById("secondAltImg").src = wrongIcon
        document.getElementById("thirdAltImg").src = wrongIcon
        document.getElementById("fouthAltImg").src = wrongIcon
        
        setAnswerAlt([])
        setQuestionText("")
        setCorrectAnswers([0,0,0,0])
        setQuizQuestion({id: 0, question: "", correct: [], answerAlt1: "", answerAlt2: "", answerAlt3: "", answerAlt4: ""})

        // Empty edit state
        setTimeout(function() {setEdit({})}, 100);
        
    }


    // Add question input values to quizQuestion state 
    useEffect(() => {
        setQuizQuestion({id:0, question: questionText, correct: correctAnswers, answerAlt1: answerAlt[0], answerAlt2: answerAlt[1], answerAlt3: answerAlt[2], answerAlt4: answerAlt[3]})
    }, [questionText, correctAnswers, answerAlt])
  

    
    function editQuestion(index) {
        // Add selected question to state
        setEdit(quiz[index])
        
        // Add selected question's values to inputs fields
        document.getElementById("questionInput").value = quiz[index].question
        document.getElementById("answerAlt1").value = quiz[index].answerAlt1
        document.getElementById("answerAlt2").value = quiz[index].answerAlt2
        document.getElementById("answerAlt3").value = quiz[index].answerAlt3
        document.getElementById("answerAlt4").value = quiz[index].answerAlt4

        setQuestionText(quiz[index].question)
        let newAnserAlt = [quiz[index].answerAlt1, quiz[index].answerAlt2, quiz[index].answerAlt3, quiz[index].answerAlt4]
        setAnswerAlt(newAnserAlt)

        // Add correct or wrong image
        if (quiz[index].correct[0] === 1) {document.getElementById("firstAltImg").src = okIcon} else {document.getElementById("firstAltImg").src = wrongIcon}
        if (quiz[index].correct[1] === 1) {document.getElementById("secondAltImg").src = okIcon} else {document.getElementById("secondAltImg").src = wrongIcon}
        if (quiz[index].correct[2] === 1) {document.getElementById("thirdAltImg").src = okIcon} else {document.getElementById("thirdAltImg").src = wrongIcon}
        if (quiz[index].correct[3] === 1) {document.getElementById("fouthAltImg").src = okIcon} else {document.getElementById("fouthAltImg").src = wrongIcon}
        
    }


    function deleteQuestion(index) {

        console.log("quiz", quiz)
        // Make new declaration of question values
        const deleteQ = quiz[index]
        // Remove question from quiz list after 100 milliseconds     
        setTimeout(function() {
            setQuiz(quiz.filter(item => item.id !== deleteQ.id));
        }, 100);
        
    }


    function copyQuestion(index) {
        // Make copy of question values
        let questionCopy = structuredClone(quiz[index])
        // Create a new unique id for the new duplicate
        const id = Math.floor(Math.random() * 100000000); questionCopy.id = id
        // Add copy to quiz list
        setQuiz(quiz => [...quiz, questionCopy]); 
    }

    useEffect(() => {
        console.log("quiz", quiz)
    })

    

    // Separation of Framer Motion animation for buttons
    const btnMotion = {
        hover:{ scale: 1.1 },
        tap:{ scale: 0.85 },
        trans:{type: "spring", stiffness: 500, damping: 100}
    }


    function saveAndExit() {
        navigate('/')
    }
    
   
    return (
    <div className='quizCreateView'>
        <Navbar />

        <div className="quizCreateView_container">
            <div className="quizCreateView_wrapper">
                
                {/* Create questions section */}

                <div className="quizCreateView_wrapper_top">
                    <div className="quizCreateView_wrapper_top_left"></div>
                    <div className="quizCreateView_wrapper_top_middle">
                        <div className="quizCreateView_title">CREATE  QUIZ</div>
                    </div>
                    <div className="quizCreateView_wrapper_top_right">
                        <div className="quizCreateView_doneBtn" onClick={() => {saveAndExit()}}><p>Done</p></div>
                    </div>
                    
                    
                </div>
                
                <div className="quizCreateView_createSection">
                    
                    <div className="quizCreateView_writeQuestion">
                        <input type="text" placeholder='Write a question...' id="questionInput" onChange={questionTextInput}/>
                        <motion.div onClick={() => {saveQuestion()}} whileHover={btnMotion.hover} whileTap={btnMotion.tap} transition={btnMotion.trans} className="quizCreateView_writeQuestion_save"></motion.div>
                    </div>

                    <div className="quizCreateView_writeAnswers_row1">
                        
                        <div className="quizCreateView_writeAnswers">
                            <div onClick={() => {selectCorrect(0)}} className="quizCreateView_writeAnswers_correctbtn"><img id="firstAltImg" src={wrongIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' id="answerAlt1" onChange={answerAltInput(0)} /> 
                        </div>

                        <div className="quizCreateView_writeAnswers">
                            <div onClick={() => {selectCorrect(1)}} className="quizCreateView_writeAnswers_correctbtn"><img id="secondAltImg" src={wrongIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' id="answerAlt2" onChange={answerAltInput(1)} /> 
                        </div>
                    </div>

                    <div className="quizCreateView_writeAnswers_row2">
                        <div className="quizCreateView_writeAnswers">
                            <div onClick={() => {selectCorrect(2)}} className="quizCreateView_writeAnswers_correctbtn"><img id="thirdAltImg" src={wrongIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' id="answerAlt3" onChange={answerAltInput(2)} /> 
                        </div>

                        <div className="quizCreateView_writeAnswers">
                            <div onClick={() => {selectCorrect(3)}} className="quizCreateView_writeAnswers_correctbtn"><img id="fouthAltImg" src={wrongIcon} alt="" /></div>
                            <input type="text" placeholder='Add answer...' id="answerAlt4" onChange={answerAltInput(3)} /> 
                        </div>
                    </div>

                </div>

                {/* All questions section */}

                <div className="quizCreateView_questionTitle">ALL QUESTIONS</div>

                    <div className="quizCreateView_allQuestionsSection">
                        
                        {quiz.map((question, i) => {
                            return (
                                <div key={i} className="quizCreateView_allQuestions_questionbox">
                                    <div className="quizCreateView_questionbox_number">{i + 1}.</div>
                                    <div className="quizCreateView_questionbox_questionText">{question.question}</div>
                                    <div className="quizCreateView_questionbox_iconbox">
                                        <motion.div whileHover={btnMotion.hover} whileTap={btnMotion.tap} transition={btnMotion.trans} onClick={() => {editQuestion(i)}} className='quizCreateView_questionbox_iconbox_edit'></motion.div>
                                        <motion.div whileHover={btnMotion.hover} whileTap={btnMotion.tap} transition={btnMotion.trans} onClick={() => {copyQuestion(i)}} className='quizCreateView_questionbox_iconbox_copy'></motion.div>
                                        <motion.div whileHover={btnMotion.hover} whileTap={btnMotion.tap} transition={btnMotion.trans} onClick={() => {deleteQuestion(i)}} id="deletebtn"  className='quizCreateView_questionbox_iconbox_delete'></motion.div>
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

export default QuizCreateView