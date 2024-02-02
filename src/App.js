import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./component/signUpForm/signUpform";
import LoginForm from "./component/loginForm/login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpForm />}></Route>
        <Route path="/loginForm" element={<LoginForm />}></Route>

      </Routes>
    </div>
  );
}

export default App;
