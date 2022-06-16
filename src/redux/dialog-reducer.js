const Update_New_Message_Body = "Update-New-Post-Text";
const Send_Message = "Send-Inputted-Message";

let initialState = {
    dialogs: [
        { name: "Mike", id: 1 },
        { name: "Nancy", id: 2 },
        { name: "Taylor", id: 3 },
        { name: "Kate", id: 4 },
      ],

      messages: [
        { message: "Mike's message", id: 1 },
        { message: "Nancy's message", id: 2 },
        { message: "Taylor's message", id: 3 },
        { message: "Kate's message", id: 4 },
      ],
      newMessageBody:"Empty message"
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Send_Message:{
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({message: body, id: 4 });
            return state;
            
        }
    case Update_New_Message_Body:{
        state.newMessageBody = action.body;
        return state;
        
    }
    
    default:
    return state;
        
    }

}
export const sendMessageCreator = () => ({type: Send_Message })
export const updateInputtedTextBodyCreator = (body) => 
({ type: Update_New_Message_Body, body:body})



export default dialogsReducer;
