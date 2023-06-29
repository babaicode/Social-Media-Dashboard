import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

type Props = {};

function App({}: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
