const Post = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
            <div className="card-header">
                User: {props.post.postedBy}
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