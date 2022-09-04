
import './App.css';

import Hello from './Components/directory/hello';
import About from './Components/directory/About';
import LoginPage from './Components/directory/LoginPage';
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <header>
        <h1>Welcome</h1>
      </header>
      <div>
        <Link to="/">Hello  </Link>
        ||
        <Link to="about">About   </Link>
        ||
        <Link to="login">Login   </Link>
      </div>
      <div>
        <Routes>
          <Route path="/"  element={<Hello />}/>
          <Route path="/About" element ={<About/>}/>
          <Route path="/login" element ={<LoginPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
