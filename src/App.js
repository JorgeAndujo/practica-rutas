import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Users from './pages/Users';
import NavBar from './components/NavBar';
import UserPage from './pages/UserPage';
import DashBoard from './pages/DashBoard';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/usuario' element={<Navigate replace to='/users' />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
