import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../../api/api";

const AddPostForm = (props) => {
    const [picture, setPicture] = useState()
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const addPost = (event) => {
        event.preventDefault()

        if(!picture) {
            setError("Post must inlude a picture...")
            return
        }

        const formData = new FormData()
        formData.set("picture", picture, picture.name)
        formData.set("description", description)

        fetch(apiBaseUrl + "/api/posts/add", {
            method: "POST",
            headers: {
                token: "JWT " + props.token
            },
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            if(data._id && data.picture) {
                navigate("/post/" + data._id)
            }
        })
    }


    return ( 
        <div>
        <form>
          <div className="form-floating mb-3">
            <input onChange={(e) => setPicture(e.target.files[0])} type="file" className="form-control rounded-4" id="floatingInput" placeholder="Choose a file" autoComplete="off"/>
            <label htmlFor="floatingInput">Upload Picture</label>
          </div>

          <div className="form-floating mb-3">
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control rounded-4" id="floatingInput" placeholder="Your description here.." autoComplete="off"/>
            <label htmlFor="floatingInput">Description</label>
          </div>
          
          <button onClick={addPost} className="w-100 mb-3 btn btn-lg rounded-4 btn-dark" type="submit">Posten</button>
          {error && <p className="bg-danger text-white p-3 rounded">{error}</p>}
        </form>
      </div>
    );
}
 
export default AddPostForm;