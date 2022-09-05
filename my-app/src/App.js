
import './App.css';

import Hello from './Components/directory/hello';
import About from './Components/directory/About';
import LoginPage from './Components/directory/LoginPage';
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Components/directory/Logout';

function App() {
  const user = useSelector(selectUser)
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
      <div >
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={user ? <Logout /> : <LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
