import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizCollectionView from './pages/quizCollectionView/QuizCollectionView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizCollectionView />}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
