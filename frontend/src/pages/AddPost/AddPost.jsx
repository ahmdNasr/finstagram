import DefaultPage from "../../Components/DefaultPage";
import AddPostForm from "./AddPostForm";

const AddPost = (props) => {
    return ( 
        <DefaultPage>
            <h1>Add new Post to your Finstagram Community</h1>
            <AddPostForm token={props.token} />
        </DefaultPage>
    );
}
 
export default AddPost;