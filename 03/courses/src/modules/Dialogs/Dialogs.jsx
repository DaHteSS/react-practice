import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => (
  <div className={classes.dialogs}>
    <div className={classes.dialogItems}>
      <Dialog id="78312" name="Andrey" />
      <Dialog id="84913" name="Daniil" />
      <Dialog id="85930" name="Artem" />
      <Dialog id="84912" name="Oleg" />
      <Dialog id="95831" name="Nastya" />
    </div>
    <div className={classes.messages}>
      <Message message="Привет" />
      <Message message="Чо каво?" />
      <Message message="Ну и где ты?" />
      <Message message="Пойдём на Джокера в субботу?" />
    </div>
  </div>
);

export default Dialogs;