import {ActionType} from "./redux-store";

type SidebarType = {}
const initialState: SidebarType = {}

export const sidebarReduser = (state: SidebarType = initialState, action: ActionType): SidebarType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}