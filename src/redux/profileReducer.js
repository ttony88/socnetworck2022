const ADD_POST_ITEM = 'ADD_POST_ITEM'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, massage: "hi, my frend", like: 99 },
        { id: 2, massage: "hello", like: 17 },
    ],

    postText: 'HI'
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_POST_ITEM:{
            let newPost = {id: 3, massage: state.postText, like: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }
        }

        case UPDATE_POST_TEXT:{
            return {
                ...state,
                postText: action.postText
            }
        }
        default:
            return state
    }
}       

export const addPostsItem = () => ({type: ADD_POST_ITEM})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, postText: text})

export default profileReducer