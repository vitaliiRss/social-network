import React from "react";
import classes from "../Dialogs.module.css"
import { MessageType } from "../../../redux/state";

export const Message = (props: MessageType) => {
  return <div key={props.id} className={classes.message}>{props.message}</div>
}