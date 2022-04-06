import React, {FC, useEffect, useState} from 'react'
import {IUser} from "../types/types"
import request from "../helpers/request"
import {useParams, useNavigate} from "react-router-dom"


const UserItemPage: FC = () => {


    const [user, setUser] = useState<IUser | null>(null)
    const {id} = useParams<{ id?: string }>()
    const navigate = useNavigate()


    const getUser = async () => {
        try {
            const data = await request<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>User's Page</h1>
            <div>
                {user?.email}

            </div>
            <div>
                {user?.address.city} {user?.address.zipcode}
            </div>
        </>
    )
}

export default UserItemPage