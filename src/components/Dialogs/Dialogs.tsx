import React from "react";
import classes from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPageType } from "../../redux/state";

type DialogsProps = {
  state: DialogsPageType
}

export const Dialogs = (props: DialogsProps) => {
  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
  let messagesElements = props.state.messages.map(message => <Message id={message.id} message={message.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
