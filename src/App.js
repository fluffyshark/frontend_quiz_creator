import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizView from './pages/quizView/QuizView';
import QuizCreateView from './pages/quizCreateView/QuizCreateView';
import QuizStats from './pages/quizStats/QuizStats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizView />}></Route>  
          <Route path="/createquiz" element={<QuizCreateView />}></Route>   
          <Route path="/stats" element={<QuizStats />}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
