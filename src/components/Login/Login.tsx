import React from "react";

type LoginPropsType = {

}

export const Login = (props: LoginPropsType) => {
    return (
        <div>
            <h1>Login</h1>
           <Form />
        </div>
    )
}

export type FormType = {

}

export const Form = (props: FormType) => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}