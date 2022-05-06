import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
            <div className="card-header">
                <Link className="text-decoration-none d-flex gap-2 align-items-center text-secondary"  to={"/user/" + props.post.postedBy.username}>
                    <img className="border border-3 border-dark rounded-circle" src={props.post.postedBy.profilePicture} alt={"Avatar of " + props.post.postedBy.username} width={40} />
                    <span className="fs-5 fw-bold">{props.post.postedBy.username}</span>
                </Link>
            </div>
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <img src={props.post.picture} alt={"Post by user " + props.post.postedBy} />
                <div className="card-body">
                    <p className="card-text">{props.post.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">❤️ Like ({props.post.likes.length})</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">💬 Comment ({props.post.comments.length})</button>
                        </div>
                        <small className="text-muted">{props.post.postedAt}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Post;