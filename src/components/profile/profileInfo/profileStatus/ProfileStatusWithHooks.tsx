import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    profileId: string
    authId: string | null
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {

    const [status, setStatus] = useState(props.status)
    const [isStatusChanges, setIsStatusChanges] = useState(false)

    const addStatusChanges = () => {
        if (props.profileId === props.authId) {
            setIsStatusChanges(true)
        }
    }

    const removeStatusChanges = () => {
        setIsStatusChanges(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!isStatusChanges && <span onDoubleClick={addStatusChanges}>
                                            {props.status || "-------"}
                                            </span>}
        {isStatusChanges && <input onBlur={removeStatusChanges}
                                              onChange={onStatusChange}
                                              autoFocus={true}
                                              value={status}
                                              type={"text"}/>}
    </div>
}