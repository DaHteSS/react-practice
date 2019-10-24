import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
  const DialogsToRender = props.state.dialogsData.map((dialog, key) => <Dialog key={key} id={dialog.id} name={dialog.name} />);
  const MessageToRender = props.state.messageData.map((message, key) => <Message key={key} message={message.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {DialogsToRender}
      </div>
      <div className={classes.messages}>
        {MessageToRender}
      </div>
    </div>
  );
}

export default Dialogs;