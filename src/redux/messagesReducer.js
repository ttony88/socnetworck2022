const ADD_MASSAGE_ITEM = 'ADD_MASSAGE_ITEM'
const UPDATE_MASSAGE_TEXT = 'UPDATE_MASSAGE_TEXT'

let initialState = {
    dialogs: [
        {
        id: 1,
        name: "Anton",
        ava: "https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg",
        },
        {
        id: 2,
        name: "Dasha",
        ava: "https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg",
        },
        {
        id: 3,
        name: "Sava",
        ava: "https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg",
        },
        {
        id: 4,
        name: "Rita",
        ava: "https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg",
        },
    ],

    massages: [
        { id: 1, myMassage: "Hi" },
        { id: 2, myMassage: "How are you" },
        { id: 3, myMassage: "Cool" },
    ],

    frendsMassages: [
        { id: 1, frendsMassage: "hello" },
        { id: 2, frendsMassage: "yo" },
        { id: 3, frendsMassage: "yes" },
    ],

    massageText: ''
}

const messagesReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_MASSAGE_ITEM:
            return {
                ...state,
                massages: [...state.massages, {id: 4, myMassage: state.massageText}],
                massageText: ''
            }
        case UPDATE_MASSAGE_TEXT:
            return {
                ...state,
                massageText: action.massageText
            } 
    
        default:
            return state
    }
}

export const addMassageItem = () => ({type: ADD_MASSAGE_ITEM})
export const updateMassageText = (text) => ({type: UPDATE_MASSAGE_TEXT, massageText: text})

export default messagesReducer