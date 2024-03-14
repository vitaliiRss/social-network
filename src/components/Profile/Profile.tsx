import React from "react";
import classes from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type ProfileType = {
  addPost: (text: string) => void
  state: ProfilePageType
}

export const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )
}
