import Post from "./Post";

const PostList = (props) => {
    return (  
        <div className="w-75 mx-auto d-flex flex-column gap-4">
            {props.posts.map(post => <Post post={post} />) }
        </div>
    );
}
 
export default PostList;