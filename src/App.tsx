import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./component/Card";
import { ITodo, IUser} from "./types/types";
import List from "./component/List";
import UserItem from "./component/UserItem";
import TodoItem from "./component/TodoItem";
import EventsExample from "./component/EventsExample";

function App() {

    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    function request<TResponse>(
        url: string,
        config: RequestInit = {}
    ): Promise<TResponse> {
        return fetch(url, config)
            .then((response) => response.json())
            .then((data) => data as TResponse);
    }

    const getUsers = async () => {
        try {
            const data = await request<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    }

    const getTodos = async () => {
        try {
            const data = await request<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUsers()
        getTodos()
    }, [])

    return (
        <div>
            <EventsExample/>
            <Card onClick={() => console.log('Click')} width='200px' height="200px" variant={CardVariant.outlined}>
                <button>Кнопка</button>
            </Card>
           <List
               items={users}
               renderItem={(user:IUser)=><UserItem user={user} key={user.id}/>}/>
            <List
                items={todos}
                renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>

        </div>
    );
}

export default App;