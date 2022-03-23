import React from 'react'
import InputField from '../UI/InputField'
import UIButton from '../UI/UIButton'

const LoginForm = () => {
    return (
            <div className={"add-student-form"}>
                <a className={"text-big-bold--purple"}>Add new student</a>
                <p>Name</p>
                <InputField placeholder="Enter your name"/>
                    <p className="">E-mail</p>
                <InputField placeholder="ex. johndoe@yahoo.com"/>
                <UIButton className="button-className overlay__add-student-button" text="Send Invite" margin={"5% 2% 0% 2%"} width={"95%"}/>
                </div>
    )
}

export default LoginForm
