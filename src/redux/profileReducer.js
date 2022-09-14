const ADD_POST_ITEM = 'ADD_POST_ITEM'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

const profileReducer = (state, action) => {

    if(action.type === ADD_POST_ITEM){

        state.posts.push({id: 3, massage: action.massage, like: 0})

    } else if(action.type === UPDATE_POST_TEXT){

        state.postText = action.text
    }
    return state
}       

export const addPostsItem = (text) => ({type: ADD_POST_ITEM, massage: text})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, text: text})

export default profileReducer