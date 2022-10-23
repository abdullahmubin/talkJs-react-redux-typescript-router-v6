import { UtilType } from "../action-types/utilAction"
import { UtilAction } from "../actions/utilAction"

const initialState: boolean = false;

const utilReducer = (state: boolean = initialState, action: UtilAction): boolean => {
    
    switch (action.type){
        case UtilType.ISREGISTATION:
            return state = action.payload;
            default:
            return state
    }
}

export default utilReducer