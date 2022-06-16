import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";




let store = {
  _state: {
    feedData: {
      posts: [
        { id: 1, name: "firstpost", likeCount: 20 },
        { id: 2, name: "secondpost", likeCount: 11 },
      ],
      newPostText: "agent 47",
    },

    chatData: {
      dialogs: [
        { name: "Mike", id: 1 },
        { name: "Nancy", id: 2 },
        { name: "Taylor", id: 3 },
        { name: "Kate", id: 4 },
      ],

      messages: [
        { message: "Mike's message", id: 1 },
        { message: "Nancy's message", id: 2 },
        { message: "Taylor's message", id: 3 },
        { message: "Kate's message", id: 4 },
      ],     
      newMessageBody:"Empty message"
    },
    
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._state._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.feedData = profileReducer(this._state.feedData,action);
    this._state.chatData = dialogsReducer(this._state.chatData,action);
    this._state._callSubscriber(this._state);

  },

};




export default store;
window.store = store;