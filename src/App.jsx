import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import { initializationApp } from './redux/appReducer'
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const UsersContainer = lazy(() => import("./components/UsersContainer/UsersContainer"))
const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"))
const Login = lazy(() => import("./components/Login/Login"))
const Music = lazy(() => import("./components/Music/Music"))
const Settings = lazy(() => import("./components/Settings/Settings"))
const News = lazy(() => import("./components/News/News"))

const App = (props) => {

  useEffect(() => props.initializationApp())

  if(!props.isInitialized){
    return(
      <Preloader />
    )
  }
  return (
      <div className="app-wraper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
    <Suspense fallback={<Preloader/>}>
      <Routes>
        <Route element={<ProfileContainer />} path="/profile/:userId" />
        <Route element={<ProfileContainer />} path="/profile" />
        <Route element={<Dialogs />} path="/dialogs/*" />
        <Route element={<UsersContainer/>} path="/users/*"/>
        <Route element={<Music />} path="/music/*" />
        <Route element={<News />} path="/news/*" />
        <Route element={<Settings />} path="/settings/*" />
        <Route element={<Login />} path= "/login" />
      </Routes>
    </Suspense>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})
  

export default connect(mapStateToProps, {initializationApp})(App);
