import React from "react";
import s from "./FormsControls.module.css"

type TextareaPropsType = {
    
}

// @ts-ignore
export const Textarea = ({input, meta,...props}) => {
        const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}
// @ts-ignore
export const Input = ({input, meta,...props}) => {
        const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input}{...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

