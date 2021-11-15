import './App.css';
import {Route, BrowserRouter as Router,Routes, Link,Outlet} from "react-router-dom";
import Header from './components/Header'
import Home from "./components/Home";
import Allparks from "./components/Allparks";
import img from './components/dinounsplash.jpg'



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <img src={img} className="image" alt="banner image"/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Allparks" element={<Allparks/>}/>
        </Routes>
        <nav className="nav">
          <ul className="navlinks">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Allparks"> All Parks </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}











export default App;