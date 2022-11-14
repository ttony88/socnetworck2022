import { getMeAuthData } from './authReducer'

const SUCCESSFUL_INITIALIZATION = 'app/SUCCESSFUL_INITIALIZATION'

let initialState = {
    isInitialized: false
}

const appReducer = (state=initialState, action) => {

    switch (action.type) {
        case SUCCESSFUL_INITIALIZATION:
            return {
                ...state,
                isInitialized: true
            }
    
        default:
            return {...state}
            
    }
}
export default appReducer

const initializationSuccessful = () => ({type: SUCCESSFUL_INITIALIZATION})

export const initializationApp = () => (dispatch) => { 

    let promis = dispatch(getMeAuthData())

    Promise.all([promis]).then(() => {
        dispatch(initializationSuccessful())
    })
}

