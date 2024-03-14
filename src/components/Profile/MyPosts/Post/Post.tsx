import React from "react";
import classes from "./Post.module.css"
import { PostType } from "../../../../redux/state";

export const Post = (props: PostType) => {
  return (
    <div key={props.id}>
      {props.message} <span>like {props.likesCount}</span>
    </div>
  )
}
