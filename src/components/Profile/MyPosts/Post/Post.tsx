import React from "react";
import classes from "./Post.module.css"

type PostPropsType = {
  message: string
  likeCount: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div>
      {props.message}
      <span>like {props.likeCount}</span>
    </div>
  )
}
