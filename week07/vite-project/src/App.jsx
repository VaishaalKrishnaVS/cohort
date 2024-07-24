import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <div>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          dashboard
        </button>
        <button onClick={handleClick}>Landing</button>
      </div>
    </div>
  );
}
export default App;
