import React, {useEffect, useState} from 'react'
import {IUser} from "../types/types"
import List from "./List"
import UserItem from "./UserItem"
import request from "../helpers/request"
import {useNavigate} from "react-router-dom"

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    const getUsers = async () => {
        try {
            const data = await request<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user)=>navigate(`/users/${user.id}`)} user={user} key={user.id}/>}/>
    )
}


export default UsersPage
