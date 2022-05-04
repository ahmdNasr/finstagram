
function makePost({
    _id,
    picture,
    description,
    likes = [], // array von user-ids + zeitstempel welche den beitrag geliked haben
    comments = [], // array von userId + comment + timestamp,
    postedAt = Date.now(),
    postedBy
}) {
    if(!picture) {
        throw new Error("Post must include picture. This is Finstagram!")
    }

    if(!postedBy) {
        throw new Error("Post must include user who posted it.")
    }

    return {
        _id,
        picture,
        description,
        likes,
        comments,
        postedAt,
        postedBy
    }
}

module.exports = {
    makePost
}

/*
Note:
    sample like object:
    {
        userId: "292929",
        timestamp: 164894030,
    }

    sample comment object:
    {
        userId: "292929",
        comment: "nice post, where did you get your hat?",
        timestamp: 164894030,
        likes: []
    }
*/
