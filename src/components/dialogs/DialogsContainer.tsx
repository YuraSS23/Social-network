import {
    addMessageActionCreator,
    changeNewMessageTextActionCreator,
    MessagesPageType
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: MessagesPageType
}

type mapDispatchToPropsType = {
    addMessage: ()=>void,
    onMessageChange: (text: string)=>void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text: string)=>{
            const action: ActionType = changeNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)