import axios from "axios";
import {FilterType, userType} from "../redux/usersReducer";
import {DataType} from "../redux/authReducer";
import {ProfileType} from "../redux/profileReducer";
import {AuthFormType} from "../components/login/LoginForm";

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type getUsersResponseType = {
    items: userType[]
    totalCount: number
    error: string | null
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d2996546-6fe9-4e4a-8747-1a32ae30e9a3"
    }
})

export const api = {
    getUsers(currentPage: number, pageSize: number, filter: FilterType) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term}`
            + (filter.friend === null ? '' : `&friend=${filter.friend}`))
            .then(response => {
                return response.data
            })
    },
    follow(id: string) {
        return instance.post<ResponseType>(`follow/${id}`, {})
    },
    unFollow(id: string) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    authMe() {
        return instance.get<ResponseType<DataType>>("auth/me")
            .then(response => {
                return response.data
            })
    },
    getUser(userID: string) {
        return instance.get<ProfileType>(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status})
    },
    login(loginData: AuthFormType) {
        return instance.post<ResponseType<DataType>>(`auth/login`, loginData)
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}