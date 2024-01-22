import React from 'react';
import ProfileContainer from "./ProfileContainer";
import {useParams} from "react-router-dom";

export const ProfileContainerWithRouter = () => {
    const params = useParams()
    return <ProfileContainer userID={params.userID}/>
};
