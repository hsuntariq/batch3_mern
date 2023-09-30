import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddGoals from "./pages/AddGoals";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Test from "./pages/Test";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Test />
        <Routes>
          <Route path="/add-goals" element={<AddGoals />} />
          <Route path="/show-goals" element={<Show />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
