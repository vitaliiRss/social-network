import React from "react";
import classes from "../Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../redux/state";

export const DialogItem = (props: DialogType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${classes.dialogItem} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}