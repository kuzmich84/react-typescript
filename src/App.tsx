import React from "react"
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
import UsersPage from "./component/UsersPage"
import TodosPage from "./component/TodosPage"
import EventsExample from "./component/EventsExample"
import UserItemPage from "./component/UserItemPage"
import TodoItemPage from "./component/TodoItemPage"

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users"  >Users</NavLink>
                <NavLink to="/todos" >Todos</NavLink>
            </div>
            <Routes>
                <Route path={'/'} element={<EventsExample/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/users/:id'} element={<UserItemPage/>}/>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App