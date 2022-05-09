import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiBaseUrl } from "../../api/api";
import DefaultPage from "../../Components/DefaultPage";

const Profile = (props) => {
    const { userId } = useParams()

    const [user, setUser] = useState()
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(apiBaseUrl + "/api/users/" + userId, {
            headers: {
                token: "JWT " + props.token
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.err) {
                setError(data.err.message)
                return
            }

            console.log(data)
            setUser(data)
        })
    }, [userId, props.token])

    return ( 
        <DefaultPage>
            {
            error 
                ? <h2 className="bg-danger text-white">{error}</h2>
                : user 
                ? <div>
                    <div className="d-flex gap-3 align-items-center">
                        <img src={user.profilePicture} alt={"Avatar of " + user.username} className="rounded-circle w-25" />

                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex gap-2">
                                <h1 className="text-white">{user.username}</h1>
                                <button>Profil Bearbeiten</button>
                            </div>
                            <h3 className="text-white">~{user.posts.length} Posts</h3>
                            <h3 className="bg-white rounded p-1 text-primary">{user.email}</h3>
                        </div>
                    </div>

                    <hr className="bg-white"/>
                    
                    <div className="row row-cols-3">
                        {user.posts.map((post, index) => 
                            <Link to={"/post/" + post._id} className="col" key={index}>
                                <img 
                                    src={post.picture} 
                                    alt={"Post " + index + " of " + user.username}
                                    className="w-100"
                                />
                            </Link>
                        )}
                    </div>
                </div>
                : <h2 className="text-white">Loading...</h2>
            }
        </DefaultPage>
     );
}
 
export default Profile;