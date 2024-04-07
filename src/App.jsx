import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import SavePassword from './pages/SavePassword';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckPassword from './pages/CheckPassword';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passwords/create" element={<NewPassword />} />
        <Route path="/passwords/eval" element={<CheckPassword />} />
        <Route path="/passwords/saved" element={<SavePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
