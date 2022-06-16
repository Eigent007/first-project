const Add_Post = "Add-Post";
const Add_Post_Text = "Add-Post-Text";

let initialState = {
    posts: [
      { id: 1, name: "firstpost", likeCount: 20 },  
      { id: 2, name: "secondpost", likeCount: 11 },
    ],
    newPostText: "agent 47",
};

const profileReducer = (state = initialState, action) => {
    debugger;
  switch (action.type) {
    case Add_Post:
      let mess_add_helper = {
        id: 5,
        name: state.newPostText,
        likeCount: 20,
      };
      state.posts.push(mess_add_helper);
      state.newPostText = "";
      return state;

    case Add_Post_Text:
      state.newPostText = action.newInputtedText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: Add_Post })
export const AddPostTextActionCreator = (newText) => 
({ type: Add_Post_Text, newInputtedText: newText })


export default profileReducer;
