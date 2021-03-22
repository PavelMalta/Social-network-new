import React from "react";
import { ProfilePageType } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



type MyPostsPropsType = {
    postsState: ProfilePageType
    addPost: (text: string) => void
}

const maxLength10 = maxLengthCreator(10)

function MyPosts(props: MyPostsPropsType) {

    let postsElement = props.postsState.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onSendPost = (formData: FormDataType) => {
        props.addPost(formData.post)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMyPostsReduxForm onSubmit={onSendPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

type FormDataType = {
    post: string
}

export const AddMyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                    <Field placeholder={'Post'} name={'post'}
                           component={Textarea} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
}

export const AddMyPostsReduxForm = reduxForm<FormDataType>({form: 'login'})(AddMyPostsForm)

export default MyPosts