import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizView from './pages/quizView/QuizView';
import QuizCreateView from './pages/quizCreateView/QuizCreateView';
import QuizStats from './pages/quizStats/QuizStats';
import LoginView from "./pages/loginView/LoginView";
import { AuthContextProvider } from "./sharedComponents/context/AuthContext";
import QuizEditView from "./pages/quizEditView/QuizEditView";
import { useEffect, useState } from "react";

function App() {

  const [userCredentials, setUserCredentials] = useState({
    username:undefined,
    password:undefined
})

const getUserCredentials = (credentials) => {
  setUserCredentials(credentials)
}


  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<LoginView getUserCredentials={getUserCredentials} />}></Route>  
            <Route path="/quizview" element={<QuizView userCredentials={userCredentials} />}></Route>  
            <Route path="/createquiz" element={<QuizCreateView />}></Route> 
            <Route path="/editquiz/*" element={<QuizEditView />}></Route>   
            <Route path="/stats" element={<QuizStats />}></Route>  
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
