import "./App.css";
import Profile from "./components/Navbar/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import News from "./components/Navbar/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Profile />} path="/profile" />
            <Route element={<Dialogs />} path="/dialogs" />
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
