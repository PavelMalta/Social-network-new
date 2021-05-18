import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {setEditMode(true)}

    const deactivateEditMode = () => {setEditMode(false)}

    const onStatusChange = () => {}

        return (
            <div>
                {!editMode
                    ? <div><span onDoubleClick={activateEditMode}>{props.status || '----'}</span></div>
                    : <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
                    </div>
                }
            </div>
        )
};
