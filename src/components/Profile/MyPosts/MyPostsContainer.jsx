import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, AddPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let postElements = props.posts.map((postsData) => (
    <Post
      post={postsData.id}
      text={postsData.name}
      likeCount={postsData.likeCount}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    //props.updatePostText(' ');
    props.dispatch(addPostActionCreator());
    //props.dispatch({type:'Add-Post-Text'});
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    //props.updatePostText(newText);
    //let action={type:'Add-Post-Text', newInputtedText:newText};
    props.dispatch(AddPostTextActionCreator(newText));
  };

  return (
    
  );
};

export default MyPostsContainer; 
