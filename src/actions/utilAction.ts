import { UtilType } from "../action-types/utilAction"

interface ShowHideRegistrationAction {
    type: UtilType.ISREGISTATION,
    payload: boolean
}


export type UtilAction = ShowHideRegistrationAction;