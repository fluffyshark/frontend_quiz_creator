import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizView from './pages/quizView/QuizView';
import QuizCreateView from './pages/quizCreateView/QuizCreateView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizCreateView />}></Route>  
          <Route path="/view" element={<QuizView />}></Route>  

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
