import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  id: number
  name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
  let path = "/dialogs/" + props.id;

  return <div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

type MessagePropsType = {
  message: string
}

export const Message = (props: MessagePropsType) => {
  return <div className={classes.dialog}>{props.message}</div>
}

export const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} />);

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
