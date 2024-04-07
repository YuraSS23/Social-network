import React from 'react';
import ProfileContainer from "./ProfileContainer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export const ProfileContainerWithRouter = withAuthRedirect(() => {
    const params = useParams()
    return <ProfileContainer userID={params.userID ? params.userID : ''}/>
})
