import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../reducers";
import { userActionCreators } from "../../store";
import FormFieldInfo from "./Form/FormFieldInfo";

const Login: React.FC = () => {
    const stateOfUser = useSelector((state: RootState) => state.userCredential)
    const dispatch = useDispatch();
    const { removeCurrentUser } = bindActionCreators(userActionCreators, dispatch)

    useEffect(() => {
        removeCurrentUser();
        localStorage.removeItem("authentication");
    }, [])

    
    return (
        <Row className="justify-content-md-center">
            <FormFieldInfo people={stateOfUser.userList} inValidUser={stateOfUser.inValidUser} />
        </Row>
    );
}

export default Login