import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Header } from "./pages/header/components";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import MytasksPage from "./pages/tasks/components";

type Props = {};

function App({}: Props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mytasks" element={<MytasksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
