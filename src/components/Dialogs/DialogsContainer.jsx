import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateInputtedTextBodyCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  debugger;
  return { chatData: state.chatData };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (body) => {
      dispatch(updateInputtedTextBodyCreator(body));
    },
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainer = (props) => {
//   debugger;
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().chatData;

//         let addMessage1 = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onMessageChange1 = (body) => {
//           //let body = e.target.value;
//           store.dispatch(updateInputtedTextBodyCreator(body));
//         };
//         return (
//           <Dialogs
//             onMessageChange={onMessageChange1}
//             addMessage={addMessage1}
//             state={state}
//             newMessageBody={state.newMessageBody}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );}
