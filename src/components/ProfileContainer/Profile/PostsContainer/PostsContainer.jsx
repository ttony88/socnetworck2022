import { connect } from "react-redux";
import Posts from "./Posts/Posts";
import { getPosts } from '../../../../selectors/selectors'

let mapStateToProps = (state) => {

    return{
        posts: getPosts(state)
    }
    
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer