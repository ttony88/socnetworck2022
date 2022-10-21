import "./App.css";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<ProfileContainer />} path="/profile/:userId" />
            <Route element={<Dialogs />} path="/dialogs/*" />
            <Route element={<UsersContainer/>} path="/users/*"/>
            <Route element={<Music />} path="/music/*" />
            <Route element={<News />} path="/news/*" />
            <Route element={<Settings />} path="/settings/*" />
            <Route element={<Login />} path= "/login" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
