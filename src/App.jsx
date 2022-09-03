import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Profile profilePage={props.state.profilePage} />} path="/profile" />
            <Route element={<Dialogs massagesPage={props.state.massagesPage}/>} path="/dialogs" />
            <Route element={<Music />} path="/music" />
            <Route element={<News />} path="/news" />
            <Route element={<Settings />} path="/settings" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
