import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import PlayPage from "./pages/play";
import ProfilePage from "./pages/profile";
import WordListPage from "./pages/word-list";
import WordListEditPage from "./pages/word-list-edit";
import DefaultLayout from "./layouts/default";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<PlayPage />} path="/play" />
        <Route element={<WordListPage />} path="/word-list" />
        <Route element={<WordListEditPage />} path="edit-word-list" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
