import Post from "./Post/Post"

const Posts = (props) => {

    let posts = props.posts.map(post => 
    <Post key={post.id} massage={post.massage} like={post.like} />)

    return(
        <div>
            {posts}
        </div>
    )
}

export default Posts