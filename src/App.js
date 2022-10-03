import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizView from './pages/quizView/QuizView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizView />}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
