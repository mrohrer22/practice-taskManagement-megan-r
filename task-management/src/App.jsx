import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1>Task Management</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
