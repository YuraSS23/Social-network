import React from 'react';
import {
    ActionType,
} from "../../redux/store";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsPropsType = {

}

export const DialogsContainer = (props: DialogsPropsType) => {

    return <StoreContext.Consumer>
                {
                    (store)=> {

                        const addMessage = () => {
                            store.dispatch(addMessageActionCreator())
                        }
                        const onMessageChange = (text: string) => {
                            const action: ActionType = changeNewMessageTextActionCreator(text)
                            store.dispatch(action)
                        }

                        return <Dialogs state={store.getState().dialogsPage} addMessage={addMessage}
                                 onMessageChange={onMessageChange}/>
                    }
                }
            </StoreContext.Consumer>
};