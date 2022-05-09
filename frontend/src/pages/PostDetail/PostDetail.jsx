import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../api/api";
import DefaultPage from "../../Components/DefaultPage";
import Post from "../../Components/Post";

const PostDetail = (props) => {
    const { postId } = useParams()
    const [post, setPost] = useState()

    const [error, setError] = useState("")

    useEffect(() => {
        fetch(apiBaseUrl + "/api/posts/" + postId, {
            headers: {
                token: "JWT " + props.token
            }
        })
        .then(response => response.json())
        .then(postResult => {
            if(postResult.err) {
                setError(postResult.err.message)
                return
            }

            setPost(postResult)
        })
    }, [props.token, postId])

    return (
        <DefaultPage token={props.token}>
            {
            error ?
            <h1 className="bg-danger text-white">{error}</h1>
            : post 
            ? <Post post={post} token={props.token} />
            : <h2 className="text-white">Loading post...</h2> }
        </DefaultPage>
    );
}
 
export default PostDetail;