import { useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';

function App() {

  return (
    <div>
      <h1>Task Management</h1>

      <TaskDetail />
    
      {/* <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes> */}
    </div>
  )
}

export default App
