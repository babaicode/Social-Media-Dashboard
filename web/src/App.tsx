import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MytasksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
