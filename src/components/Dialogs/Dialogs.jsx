import React from "react";
import s from "./Dialogs.module.css";
import Dialog_item from "./Dialog_Item/Dialog_Item";
import Message from "./Message/Message";
import { sendMessageCreator, updateInputtedTextBodyCreator } from "../../redux/dialog-reducer";

const Dialogs = (props) => {
  debugger;
  
  let state = props.store.getState().chatData;
  let newMessageBody = state.newMessageBody;

  let dialogElements = state.dialogs.map((d) => ( 
     <Dialog_item name={d.name} id={d.id} />
  ));

  let messageElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateInputtedTextBodyCreator(body));
  }
  
  return (
    
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogElements}</div>
      
      <div className={s.messages}>{messageElements}</div>
      <div>
        <textarea value={newMessageBody} onChange={onMessageChange} className={s.textarea} placeholder="Enter your message"></textarea>
      </div>
      <div>
        <button onClick={addMessage} className={s.button}>send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
