let reRender = () => {}

let state = {

    profilePage: {

        postText: 'jnfdklkd',

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
    
}


export default state

window.state = state

export let addMassageItem = (text) => {

    state.massagesPage.massages.push(
        {id: 4, myMassage: text}
    )
    reRender(state)
}

export let addPostsItem = (text) => {
    state.profilePage.posts.push(
        {id: 3, massage: text, like: 0}
        
    )
    reRender(state)
}

export let changePostText = (text) => {
    state.profilePage.postText = text
    reRender(state)
}

export const subscraib = (observer) => {
    reRender = observer
}


