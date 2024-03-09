import React from "react";
import classes from "../Dialogs.module.css"
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  id: number
  name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${classes.dialogItem} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}