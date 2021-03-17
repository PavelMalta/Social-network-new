import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (body: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>);

    let addNewMessage = (formData: FormDataType) => {
        props.sendMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
               <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    message: string
}

export const MessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter you message'} name={'message'} component={'textarea'}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
        </Form>
    )
}

export const MessageReduxForm = reduxForm<FormDataType>({form: 'message'})(MessageForm)