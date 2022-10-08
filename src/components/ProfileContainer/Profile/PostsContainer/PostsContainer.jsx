import { connect } from "react-redux";
import Posts from "./Posts/Posts";

let mapStateToProps = (state) => {

    return{
        posts: state.profilePage.posts
    }
    
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer