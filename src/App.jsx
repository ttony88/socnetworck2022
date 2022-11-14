import React from "react";
import "./App.css";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import { initializationApp } from './redux/appReducer'
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount(){
    this.props.initializationApp()
  }

  render(){

    if(!this.props.isInitialized){
      return(
        <Preloader />
      )
    }
    return (
        <div className="app-wraper">
          <HeaderContainer />
          <Navbar />
          <div className="content">
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
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})
  

export default connect(mapStateToProps, {initializationApp})(App);
