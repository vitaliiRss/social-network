import React from "react";
import classes from "./MyPosts.module.css"
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <Post message={"post 1"} likeCount={1} />
        <Post message={"post 2"} likeCount={11} />
        <Post message={"post 3"} likeCount={111} />
      </div>
    </div>
  )
}
