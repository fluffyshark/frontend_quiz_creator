export const EditorToDatabaseQuiz = (unformattedQuiz, quiztitle) => {
    
    let formattedQuiz = {
        quizName: quiztitle,
        questions: []
    }

    unformattedQuiz.map((quiz) => {

        let correct1; let correct2; let correct3; let correct4;

        if (quiz.correct[0] === 0) {correct1 = false} else {correct1 = true}
        if (quiz.correct[1] === 0) {correct2 = false} else {correct2 = true}
        if (quiz.correct[2] === 0) {correct3 = false} else {correct3 = true}
        if (quiz.correct[3] === 0) {correct4 = false} else {correct4 = true}

        formattedQuiz.questions.push({
            questionText: quiz.question,
            answerOptions: [
                {answerAlt: quiz.answerAlt1, isCorrect: correct1},
                {answerAlt: quiz.answerAlt2, isCorrect: correct2},
                {answerAlt: quiz.answerAlt3, isCorrect: correct3},
                {answerAlt: quiz.answerAlt4, isCorrect: correct4}
            ]  
        })
    })

    return formattedQuiz
}





export const DatabaseToEditorQuiz = (unformattedQuiz) => {
    let formattedQuiz = []

    // Give question a id
    const id = Math.floor(Math.random() * 100000000);
    let correctAnswer = [0,0,0,0]

    // Make sure fetch request has loaded
    if (unformattedQuiz.hasOwnProperty('questions')) {
        
        unformattedQuiz.questions.map((data) => {
            if (data.answerOptions[0].isCorrect === true) {correctAnswer[0] = 1} else {correctAnswer[0] = 0} 
            if (data.answerOptions[1].isCorrect === true) {correctAnswer[1] = 1} else {correctAnswer[1] = 0} 
            if (data.answerOptions[2].isCorrect === true) {correctAnswer[2] = 1} else {correctAnswer[2] = 0} 
            if (data.answerOptions[3].isCorrect === true) {correctAnswer[3] = 1} else {correctAnswer[3] = 0} 
    
            formattedQuiz.push({
                id: Math.floor(Math.random() * 100000000),
                question: data.questionText,
                answerAlt1: data.answerOptions[0].answerAlt,
                answerAlt2: data.answerOptions[1].answerAlt,
                answerAlt3: data.answerOptions[2].answerAlt,
                answerAlt4: data.answerOptions[3].answerAlt,
                correct: correctAnswer
            })
    
        })

    }

    return formattedQuiz
}



/* QUIZ EDITOR STRUCTURE
answerAlt1: "1"
answerAlt2: "3"
answerAlt3: "2"
answerAlt4: "4"
correct: Array(4)
0: 1
1: 0
2: 0
3: 0
id: 87965082
question: "question 1"
*/



/* DATABASE QUIZ STRUCTURE
let quizFormat = {
    quizName: "",
    questions: [
        {
            questionText: "",
            answerOptions: [
                {answerAlt: "", isCorrect: false},
                {answerAlt: "", isCorrect: true},
                {answerAlt: "", isCorrect: true},
                {answerAlt: "", isCorrect: true}
            ]
        }
    ] 
}

*/
