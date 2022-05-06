import '../App.css';
import Navigation from "../../Components/Navigation";
import PostList from '../../Components/PostList';
import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../api/api';

const Home = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(apiBaseUrl + "/api/posts/feed", {
            headers: {
                "token": "JWT " + props.token
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.err) {
                alert("Error loading posts: " + data.err)
            } else {
                setPosts(data)
            }
        })
    }, [props])

    return (
        <div className='bg-secondary'>
            <Navigation />
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <PostList posts={posts} />
                    </div>
                    <div className="col-4 d-none d-lg-block"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;