import "./App.css";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import Header from "./components/HeaderContainer/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<ProfileContainer />} path="/profile/:userId" />
            <Route element={<Dialogs />} path="/dialogs/*" />
            <Route element={<UsersContainer/>} path="/users/*"/>
            <Route element={<Music />} path="/music/*" />
            <Route element={<News />} path="/news/*" />
            <Route element={<Settings />} path="/settings/*" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
