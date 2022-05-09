import '../App.css';
import PostList from '../../Components/PostList';
import { useEffect, useState } from 'react'
import { apiBaseUrl } from '../../api/api';
import DefaultPage from '../../Components/DefaultPage';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DefaultPage token={props.token}>
            {/* von DefaultPage die children... */}
            <h1>Main Finstagram Feed:</h1>
            <PostList posts={posts} token={props.token} />
        </DefaultPage>
    );
}
 
export default Home;