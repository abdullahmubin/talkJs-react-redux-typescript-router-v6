import { UserActionType } from "../action-types/userActionTypes"
import { ITodoModel } from "./../types/index"

interface AddUser {
    type: UserActionType.ADDUSER,
    payload: ITodoModel
}

interface CheckValidUser {
    type: UserActionType.CHECKVALIDUSER,
    payload: ITodoModel
}

interface setCurrentLocation {
    type: UserActionType.SETCURRENTLOCATION,
    payload: ITodoModel
}

interface removeCurrentUser {
    type: UserActionType.REMOVECURRENTUSER,
    
}


export type UserAction = AddUser | CheckValidUser | setCurrentLocation | removeCurrentUser;