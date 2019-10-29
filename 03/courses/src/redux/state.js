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
      ]
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

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  }
}

export default store;