const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hehe boiiii", likeCount: 10 },
      { id: 2, message: "First comment...", likeCount: 30 }
    ]
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

export default state;