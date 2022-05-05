import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
// import Home from './pages/Home'

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}