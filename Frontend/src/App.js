import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage} from "./routes/Routes"

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
