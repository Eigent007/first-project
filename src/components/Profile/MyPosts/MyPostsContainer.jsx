import React from "react";
import {
  addPostActionCreator,
  AddPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    //props.addPost();
    //props.updatePostText(' ');
    props.store.dispatch(addPostActionCreator());
    //props.dispatch({type:'Add-Post-Text'});
  };

  let onPostChange = (newText) => {
    //let newText = newPostElement.current.value;
    //props.updatePostText(newText);
    //let action={type:'Add-Post-Text', newInputtedText:newText};
    props.store.dispatch(AddPostTextActionCreator(newText));
  };

  return (
    <MyPosts
      updatePostText={onPostChange}
      addPost={addPost}
      posts={state.feedData.posts}
      newPostText={state.feedData.newPostText}
    />
  );
};

export default MyPostsContainer;
