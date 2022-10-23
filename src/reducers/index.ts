import { combineReducers } from "redux";
import userReducer from "./userReducer"
import utilReducer from "./utilReducer"
import galleryReducer from "./galleryReducer"

const reducers = combineReducers({
    userCredential: userReducer,
    sowReistration: utilReducer,
    galleryList: galleryReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>