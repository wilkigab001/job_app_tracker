import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/applicationForm' element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
