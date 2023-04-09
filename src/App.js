//import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/dashboard"
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Explore from "./components/explore/explore";
import Search from "./components/search/search";
import Profile from "./components/profile/profile";
import WorkSpace from "./components/workspace/workspace";
import Blogs from "./components/blogs/blogs";
//TODO: Fix BackToTop button

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<DashBoard/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/search" element={<Search />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/workspace" element={<WorkSpace />} />
    <Route path="/blogs:handle" element={<Blogs />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
