import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import navbarReducer from './navbarReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, massage: "hi, my frend", like: 99 },
        { id: 2, massage: "hello", like: 17 },
      ],

      postText: null
    },

    massagesPage: {
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
    },

    navBar: {
      frends: [
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
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubsckribe() {},

  subscraib(observer) {
    this._callSubsckribe = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.massagesPage = messagesReducer(this._state.massagesPage, action)
    this._state.navBar = navbarReducer(this._state.navBar, action)

    this._callSubsckribe(this._state);
  },
};

export default store;
