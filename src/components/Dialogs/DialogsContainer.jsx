import React from "react";
import {
  sendMessageCreator,
  updateInputtedTextBodyCreator,
} from "../../redux/dialog-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  debugger;
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().chatData;
        let newMessageBody = state.newMessageBody;

        let addMessage1 = () => {
          store.dispatch(sendMessageCreator());
        };

        let onMessageChange1 = (body) => {
          //let body = e.target.value;
          store.dispatch(updateInputtedTextBodyCreator(body));
        };
        return (
          <Dialogs
            onMessageChange={onMessageChange1}
            addMessage={addMessage1}
            state={state}
            newMessageBody={newMessageBody}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
