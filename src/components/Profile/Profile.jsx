import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.feedData.posts}
        newPostText={props.feedData.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
