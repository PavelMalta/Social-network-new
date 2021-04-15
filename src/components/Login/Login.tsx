import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {Preloader} from "../common/Preloader/Preloader";

type LoginPropsType = {

}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = (props: LoginPropsType) => {
    let dispatch = useDispatch()
    let isFetching = useSelector<AppStateType>(state => state.usersPage.isFetching)

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.login, formData.password, formData.rememberMe))
    }

    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                       component={Input} validate={[requiredField]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)



