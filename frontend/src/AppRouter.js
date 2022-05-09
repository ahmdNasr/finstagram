import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import AuthRequired from './Components/AuthRequired'
import AddPost from './pages/AddPost/AddPost'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PostDetail from './pages/PostDetail/PostDetail'
import Registration from './pages/Registration/Registration'
import VerifyEmail from './pages/VerifyEmail/VerifyEmail'

function AppRoutes(){
    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    
    const loginSuccess = (token) => {
        setToken(token)
        navigate("/home")
    }

    // const logout = (token) => {
    //     setToken(null)
    //     navigate("/")
    // }

    return (
        <Routes>
            <Route path="/" element={<Login loginSuccess={loginSuccess} />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/home" 
                element={
                    <AuthRequired token={token} setToken={setToken}>
                        <Home token={token} />
                    </AuthRequired>
                }
            />
            <Route path="/add-post" 
                element={
                    <AuthRequired token={token} setToken={setToken}>
                        <AddPost token={token} />
                    </AuthRequired>
                }
            />
            <Route path="/post/:postId" 
                element={
                    <AuthRequired token={token} setToken={setToken}>
                        <PostDetail token={token} />
                    </AuthRequired>
                }
            />
        </Routes>
    )
}
export default function AppRouter() {
    return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>)
}