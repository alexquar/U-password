import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import SavePassword from './pages/SavePassword';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckPassword from './pages/CheckPassword';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
const {user} = useAuthContext()
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={ user ? <Home /> : <Login />} />
        <Route path="/passwords/create" element={ user ? <NewPassword />: <Login />} />
        <Route path="/passwords/eval" element={ user ? <CheckPassword /> : <Login />} />
        <Route path="/passwords/saved" element={ user ? <SavePassword />:<Login/>} />
        <Route path="/login" element={!user? <Login />:<Home/>} />
        <Route path="/signup" element={!user?<Signup />:<Home/>} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
