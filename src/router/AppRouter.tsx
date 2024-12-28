import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TodosPage from '../pages/TodosPage'
import TodoPage from '../pages/TodoPage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/todos/:id' element={<TodoPage/>}/>
    </Routes>
  )
}

export default AppRouter