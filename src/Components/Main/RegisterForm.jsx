import React, {useState} from 'react'

import InputField from '../UI/InputField'
import UIButton from '../UI/UIButton'
import ExternalServices from '../UI/ExternalServices'

function RegisterForm({isLoggedIn}) {
    const [registerDetails, setRegisterDetails] = useState({name:"", lastname:"",email:"",password:""})
    
    const [error, setError] = useState(true)

    const submitHandler = e => {
        e.preventDefault();
        RegisterHandle(registerDetails);
    }
    // const RegisterHandle = registerDetails => {
    //     if (registerDetails.name !== "" && registerDetails.name !== null &&
    //         registerDetails.lastname !== "" && registerDetails.lastname !== null &&
    //         registerDetails.email !== "" && registerDetails.email !== null &&
    //         registerDetails.password !== "" && registerDetails.password !== null
    //         ){
    //         console.log(registerDetails);
    //     } else (console.log("wpiszto"))
    // }
    const RegisterHandle = registerDetails => {
        if (registerDetails.name == "" || registerDetails.name == null) {console.log("nie1");}
        else if (registerDetails.lastname == "" || registerDetails.lastname == null) {console.log("nie2");}
        else if (registerDetails.email == "" || registerDetails.email == null) {console.log("nie3");}
        else if (registerDetails.password == "" || registerDetails.password == null) {console.log("nie4");}
    }
    https://www.freecodecamp.org/news/build-dynamic-forms-in-react/

    return (
        <form className="register-form" onSubmit={submitHandler}>
            <h1>Welcome do Isardo!</h1>
            <h2>Register your Account</h2>
            <p>Name</p>
            <InputField type={"text"} placeholder={"e.g. John"} name={"name"}  value={registerDetails.name} onChange={e => setRegisterDetails({...registerDetails, name: e.target.value})} error={error}/>
            <p>Lastname</p>
            <InputField type={"text"}  placeholder={"e.g. Doe"} name={"lastname"} value={registerDetails.lastname} onChange={e => setRegisterDetails({...registerDetails, lastname: e.target.value})} error={error} />
            <p>Mail</p>
            <InputField type={"email"} placeholder={"e.g. johndoe@yahooo.com"} name={"email"} value={registerDetails.email} onChange={e => setRegisterDetails({...registerDetails, email: e.target.value})} error={error} />
            <p>Password</p>
            <InputField type={"password"} placeholder={"Enter Your Password"} name={"password"} value={registerDetails.password} onChange={e => setRegisterDetails({...registerDetails, password: e.target.value})} error={error} />
            <UIButton /*type={"Submit"}*/ text={"Sign Up"} width={"500px"}  margin={"40px 0 0 0"}/>
            <a className={"create-account-external"}>or create accout with</a>
            <ExternalServices/>
        </form>
    )
}

export default RegisterForm