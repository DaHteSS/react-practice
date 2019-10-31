import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "First comment...", likeCount: 88 },
        { id: 2, message: "Hehe boiiii", likeCount: 14 }
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        { id: 78312, name: "Andrey" },
        { id: 84913, name: "Daniil" },
        { id: 85930, name: "Artem" },
        { id: 84912, name: "Oleg" },
        { id: 95831, name: "Nastya" }
      ],
      messageData: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Чо каво?" },
        { id: 3, message: "Ну и где ты?" },
        { id: 4, message: "Пойдём на Джокера в субботу?" }
      ],
      newMessageText: ''
    },
    sidebar: {
      friendsData: [
        { id: 13123, name: "Oleg" },
        { id: 23413, name: "Dantess" },
        { id: 13333, name: "Artem" }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;