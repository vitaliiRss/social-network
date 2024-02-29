import React from "react";
import classes from "./Post.module.css"

type PostPropsType = {
  message: string
  likesCount: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div>
      {props.message} <span>like {props.likesCount}</span>
    </div>
  )
}
