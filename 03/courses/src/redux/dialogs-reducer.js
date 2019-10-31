const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messageData.push({id: 5, message: state.newMessageText});
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}