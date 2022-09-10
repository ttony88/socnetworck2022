let store = {

    _state: {

        profilePage: {
    
            posts: [
                {id: 1, massage: 'hi, my frend', like: 99},
                {id: 2, massage: 'hello', like: 17}
            ]
        },
        
        massagesPage: {
    
            dialogs: [
                {id: 1, name: 'Anton', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
                {id: 2, name: 'Dasha', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
                {id: 3, name: 'Sava', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
                {id: 4, name: 'Rita', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'}
            ],
          
            massages: [
                {id: 1, myMassage: 'Hi'},
                {id: 2, myMassage: 'How are you'},
                {id: 3, myMassage: 'Cool'}
            ],
    
            frendsMassages: [
                {id: 1, frendsMassage: 'hello'},
                {id: 2, frendsMassage: 'yo'},
                {id: 3, frendsMassage: 'yes'}
            ]
        }, 
        
        navBar: {
    
            frends: [
                {id: 1, name: 'Anton', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
                {id: 2, name: 'Dasha', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
                {id: 3, name: 'Sava', ava: 'https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-600w-677579845.jpg'},
            ]
        }
        
    }, 
    
getState() {
    return this._state
},

_callSubsckribe() {},

addMassageItem(text) {

    this._state.massagesPage.massages.push(
        {id: 4, myMassage: text}
    )
    this._callSubsckribe(this._state)
},

addPostsItem(text) {
    this._state.profilePage.posts.push(
        {id: 3, massage: text, like: 0}
        
    )
    this._callSubsckribe(this._state)
},

changePostText (text) {
    this._state.profilePage.postText = text
    this._callSubsckribe(this._state)
},

subscraib(observer) {
    this._callSubsckribe = observer
}
}

export default store










