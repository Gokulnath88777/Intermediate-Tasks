import Login from './Login';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ToastContainer } from "react-toastify";
import AuthProvider from './AuthProvider';

function App() {
  
  return(<BrowserRouter>
    <AuthProvider>
        <Router/>
    </AuthProvider>
    <ToastContainer autoClose={2000}/>
    </BrowserRouter>);
  
}

export default App
