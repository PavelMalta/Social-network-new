import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(true)


    const onStatusChange = () => {}

        return (
            <div>
                {editMode
                    ? <div><span onDoubleClick={()=>setEditMode(!editMode)}>{props.status || '----'}</span></div>
                    : <div>
                        <input onChange={onStatusChange} autoFocus={true}/>
                    </div>
                }
            </div>
        )
};
