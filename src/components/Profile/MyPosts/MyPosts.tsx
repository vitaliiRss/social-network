import React, { RefObject } from "react";
import classes from "./MyPosts.module.css"
import { Post } from "./Post/Post";
import { ProfilePageType } from "../../../redux/state";

type MyPostsType = {
  addPost: (text: string) => void
} & ProfilePageType


export const MyPosts = (props: MyPostsType) => {
  let postsElements =
    props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value)
    }
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}
