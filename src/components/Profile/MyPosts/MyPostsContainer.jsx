import {
  addPostActionCreator,
  AddPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  debugger;
  return { posts: state.feedData.posts, newPostText: state.feedData.newPostText };
};

let mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    updatePostText: (newText) => {
      dispatch(AddPostTextActionCreator(newText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           //props.addPost();
//           //props.updatePostText(' ');
//           store.dispatch(addPostActionCreator());
//           //props.dispatch({type:'Add-Post-Text'});
//         };

//         let onPostChange = (newText) => {
//           //let newText = newPostElement.current.value;
//           //props.updatePostText(newText);
//           //let action={type:'Add-Post-Text', newInputtedText:newText};
//           store.dispatch(AddPostTextActionCreator(newText));
//         };
//         return (
//           <MyPosts
//             updatePostText={onPostChange}
//             addPost={addPost}
//             posts={state.feedData.posts}
//             newPostText={state.feedData.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };