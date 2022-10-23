import { Dispatch } from "redux"
import { UtilType } from "../action-types/utilAction"
import { UtilAction } from "../actions/utilAction"


export const sowReistration = (val: boolean) => {
    return (dispatch: Dispatch<UtilAction>) => {
        dispatch({
            type: UtilType.ISREGISTATION,
            payload: val
        })
    }
}