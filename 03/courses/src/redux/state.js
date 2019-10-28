let rerender = null;

const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "First comment...", likeCount: 88 },
      { id: 2, message: "Hehe boiiii", likeCount: 14 }
    ],
    newPostText: 'New message',
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
      {id: 13123, name: "Oleg"},
      {id: 23413, name: "Dantess"},
      {id: 13333, name: "Artem"}
    ]
  }
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerender(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerender(state);
}

export const subscribe = (observer) => {
  rerender = observer;
}

export default state;