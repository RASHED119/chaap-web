import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home/Home';
import Login from './page/Login/Login';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
