import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import VerifyEmail from './pages/VerifyEmail/VerifyEmail'

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}