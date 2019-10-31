import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';
import { addMessageCreator, updateNewMessageTextCreator } from './../../redux/dialogs-reducer'

const Dialogs = (props) => {
  const DialogsToRender = props.state.dialogsData.map((dialog, key) => <Dialog key={key} id={dialog.id} name={dialog.name} />);
  const MessageToRender = props.state.messageData.map((message, key) => <Message key={key} message={message.message} />);

  const addMessage = () => {
    props.dispatch(addMessageCreator());
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {DialogsToRender}
      </div>
      <div className={classes.messages}>
        {MessageToRender}
        <form>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            placeholder="Type smth..."
          />
          <input onClick={addMessage} type="button" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Dialogs;