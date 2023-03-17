import { Route, Routes } from "react-router";
import Dashboard from "./Home/Dashboard";
import Homepage from "./Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
