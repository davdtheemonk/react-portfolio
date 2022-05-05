import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Portfolio from './Components/Portfolio';
import {Route,Routes,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/portfolio' element={<Portfolio/>}/>
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
