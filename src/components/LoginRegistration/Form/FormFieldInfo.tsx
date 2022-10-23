import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { IState as IProps, IStateProps, ITodoModel, INotification } from '../../../types/index'
import { userActionCreators, utilActionCreators } from '../../../store'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { RootState } from '../../../reducers'
import Shared from '../../shared'



const FormFieldInfo: React.FC<IStateProps> = ({ people, inValidUser }) => {
    const dispatch = useDispatch();
    const stateOfUtils = useSelector((state: RootState) => state.sowReistration);
    const { addUser, checkvaliduser, removeCurrentUser } = bindActionCreators(userActionCreators, dispatch)
    const { sowReistration } = bindActionCreators(utilActionCreators, dispatch);

    // Note: Notification and form validation.
    const [validationCheck, setValidation] = useState<boolean>(false);
    const [notificationInfo, setNotificationInfo] = useState<INotification>({
        show: false,
        message: ""
    });
    const [input, setInput] = useState<ITodoModel>({
        id: 0,
        username: "",
        password: "",

    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const resetNotification = (): void => {
        if (notificationInfo.show != false) {
            setNotificationInfo({
                show: false,
                message: ""
            })
        }
    }

    const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setValidation(true);
        resetNotification();

        if (!input.username.trim() || !input.password.trim()) return;

        if (stateOfUtils) {

            let findAlreadyUser = people.find(i => i.username == input.username)
            if (findAlreadyUser) {
                setNotificationInfo({
                    show: true,
                    message: `${findAlreadyUser.username} is already exists. Try different username or Log in now.`
                })

            } else {
                addUser({ id: 0, username: input.username, password: input.password })
                setValidation(false)

                setNotificationInfo({
                    show: true,
                    message: "Account successfully created. Log in now."
                })

            }

            setInput({ id: 0, username: "", password: "" })
            setValidation(false)
            sowReistration(!stateOfUtils)


        }
        else
            checkvaliduser({ id: 0, username: input.username, password: input.password })

    }

    const modeCane = (): void => {
        sowReistration(!stateOfUtils)
        setNotificationInfo({
            show: false,
            message: "Account successfully created. Log in now."
        })

        setInput({
            id: 0,
            username: "",
            password: "",
        })

        setValidation(false)
    }

    useEffect(() => {

        if (inValidUser) {
            setNotificationInfo({
                show: true,
                message: "Invalid Username/Password."
            })
            removeCurrentUser();
        }

    }, [inValidUser])

    let errorOnUsername = validationCheck && !input.username ? true : false;
    let errorOnPassword = validationCheck && !input.password ? true : false;


    return (
        <Col md="5" className='login-container mt-4 log-in-box'>

            <h3>{stateOfUtils ? `Sign Up` : `Log in`}</h3>

            <Form onSubmit={(e) => handleClick(e)}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        placeholder='username'
                        value={input.username}
                        onChange={handleChange}
                        name="username"
                        className={`${errorOnUsername ? `error-border` : ``}`}
                    />
                    {
                        errorOnUsername ? <Form.Text className="text-muted error-label">
                            Username is required.
                        </Form.Text> : ""
                    }

                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder='password'
                        value={input.password}
                        onChange={handleChange}
                        className={`${errorOnPassword ? `error-border` : ``}`}
                        name="password" />
                    {
                        errorOnPassword ? <Form.Text className="text-muted error-label">
                            Password is required.
                        </Form.Text> : ""
                    }
                </Form.Group>

                <Button variant="primary" type="submit" className='m-0'>
                    {stateOfUtils ? "Sign Up" : "Log In"}
                </Button>


            </Form>
            <div className="d-flex  linksm mt-4 pb-4">
                {
                    stateOfUtils ?
                        <>
                            Already have an account?
                            <Button variant="link" onClick={modeCane} className="p-0">Log In</Button>
                        </>
                        :
                        <>
                            Don't have an account?
                            <Button variant="link" onClick={modeCane} className="p-0">Sign Up</Button>
                        </>
                }

            </div>

            <Shared {...notificationInfo} />

        </Col>
    )
}

export default FormFieldInfo