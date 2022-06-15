import React from "react";
import {
  addPostActionCreator,
  AddPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          //props.addPost();
          //props.updatePostText(' ');
          store.dispatch(addPostActionCreator());
          //props.dispatch({type:'Add-Post-Text'});
        };

        let onPostChange = (newText) => {
          //let newText = newPostElement.current.value;
          //props.updatePostText(newText);
          //let action={type:'Add-Post-Text', newInputtedText:newText};
          store.dispatch(AddPostTextActionCreator(newText));
        };
        return (
          <MyPosts
            updatePostText={onPostChange}
            addPost={addPost}
            posts={state.feedData.posts}
            newPostText={state.feedData.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
