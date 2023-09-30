import './App.css';
import Profile from './pages/Profile'; // Adjust the import path
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;