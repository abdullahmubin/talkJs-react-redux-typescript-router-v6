import { UserActionType } from "../action-types/userActionTypes"
import { UserAction } from "../actions/userAction"

import { ITodoModel, IModalInfos } from "./../types/index"


const initialState: IModalInfos = {
    userList: [{
        id: 0,
        username: "admin",
        password: "Test12345"
    }],
    activeUserObj: null, 
}

const reducer = (state: IModalInfos = initialState, action: UserAction): IModalInfos => {

    switch (action.type) {
        case UserActionType.ADDUSER:
            let setUserId = state.userList.length;
            let user = action.payload;
            user.id = setUserId;
            return {
                ...state, userList: [...state.userList, user],
            };
        case UserActionType.CHECKVALIDUSER:
            let userList = state.userList;

            let findUser = userList.find(i => i.username == action.payload.username && i.password == action.payload.password)
            if (findUser) {
                return {
                    ...state, activeUserObj: findUser,
                };
            }
            else
                return {
                    ...state, activeUserObj: null, inValidUser: true
                };
        case UserActionType.SETCURRENTLOCATION:
            return {
                ...state, activeUserObj: action.payload
            }
        case UserActionType.REMOVECURRENTUSER:
            return {
                ...state, activeUserObj: null, inValidUser: false
            }
        default:
            return state
    }
}

export default reducer