const ADD_MASSAGE_ITEM = 'ADD_MASSAGE_ITEM'

const messagesReducer = (state, action) => {

    if(action.type === ADD_MASSAGE_ITEM){

        state.massages.push({id: 4, myMassage: action.myMassage})
    }
    return state
}

export const addMassageItem = (text) => ({type: ADD_MASSAGE_ITEM, myMassage: text})

export default messagesReducer