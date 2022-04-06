import React, {useEffect, useState} from 'react'
import List from "./List"
import {ITodo} from "../types/types"
import TodoItem from "./TodoItem"
import request from "../helpers/request"

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])



    const getTodos = async () => {
        try {
            const data = await request<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <List
            items={todos}
            renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>
    )
}

export default TodosPage