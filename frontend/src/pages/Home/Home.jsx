import '../App.css';
import Navigation from "../../Components/Navigation";
import PostList from '../../Components/PostList';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { apiBaseUrl } from '../../api/api';

const Home = (props) => {
    console.log("Das ist unser token:", props.token)
    // temporär
    useEffect(() => {
        fetch(apiBaseUrl + "/api/users/refreshtoken", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if(data.token) {
                props.setToken(data.token)
            }
        })
    }, [props])
    
    if(!props.token) {
        return (<Navigate to="/" />)
    } else return (
        <div className='bg-secondary'>
            <Navigation />
            <div className="container mt-5 vh-100">
                <div className="row">
                    <div className="col-8">
                        <PostList />
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;