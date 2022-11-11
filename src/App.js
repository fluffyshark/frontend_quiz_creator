import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizView from './pages/quizView/QuizView';
import QuizCreateView from './pages/quizCreateView/QuizCreateView';
import QuizStats from './pages/quizStats/QuizStats';
import LoginView from "./pages/loginView/LoginView";
import { AuthContextProvider } from "./sharedComponents/context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<LoginView />}></Route>  
            <Route path="/quizview" element={<QuizView />}></Route>  
            <Route path="/createquiz/*" element={<QuizCreateView />}></Route>   
            <Route path="/stats" element={<QuizStats />}></Route>  
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
