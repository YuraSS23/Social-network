import axios from "axios";
import {userType} from "../redux/usersReducer";

type followResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type getUsersResponseType = {
    items: userType[]
    totalCount: number
    error: string | null
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
})

export const api =  {
    getUsers(page: number){
        return instance.get<getUsersResponseType>(`users?page=${page}&count=4`)
            .then(response => {
                return response.data
            })
    },
    follow(id: string){
        return instance.post<followResponseType>(`follow/${id}`, {})
    },
    unFollow(id: string){
        return instance.delete<followResponseType>(`follow/${id}`)
    },
    authMe(){
        return instance.get("auth/me")
    },
    getUser(userID: string){
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    }
};