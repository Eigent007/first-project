import React from "react";
import { sendMessageCreator, updateInputtedTextBodyCreator } from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  debugger;
  
  let state = props.store.getState().chatData;
  let newMessageBody = state.newMessageBody;

  let addMessage1 = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onMessageChange1 = (body) => {
    //let body = e.target.value;
    props.store.dispatch(updateInputtedTextBodyCreator(body));
  }
  
  return (<Dialogs onMessageChange={onMessageChange1} addMessage={addMessage1} state={state} newMessageBody={newMessageBody} />
  );
};

export default DialogsContainer;
