import { Dispatch } from "redux"
import { UserActionType } from "../action-types/userActionTypes"
import { UserAction } from "../actions/userAction"
import { ITodoModel } from "./../types/index"

export const addUser = (val: ITodoModel) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.ADDUSER,
            payload: val
        })
    }
}

export const checkvaliduser = (val: ITodoModel) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.CHECKVALIDUSER,
            payload: val
        })
    }
}

export const setCurrentLocation = (currentLocation: ITodoModel) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SETCURRENTLOCATION,
            payload: currentLocation
        })
    }
}

export const removeCurrentUser = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.REMOVECURRENTUSER,
            payload: null
        })
    }
}