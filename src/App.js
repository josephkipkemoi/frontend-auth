import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import ProtectedRoute from './utils/ProtectedRoute';
import ForgotPassword from './pages/forgot-password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
