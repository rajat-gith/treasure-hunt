import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import GameScreen from "./screens/GameScreen";
import Nav from "./components/Nav";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminDashboard from "./screens/AdminDashboard";
import PlayerLoginScreen from "./screens/PlayerLoginScreen";
import PlayerRegisterScreen from "./screens/PlayerRegisterScreen";
import ResultWindow from "./screens/ResultWindow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/game" Component={GameScreen} />
          <Route path="/admin/login" Component={AdminLoginScreen} />
          <Route path="/admin/dashboard" Component={AdminDashboard} />
          <Route path="/player/login" Component={PlayerLoginScreen} />
          <Route path="/player/register" Component={PlayerRegisterScreen} />
          <Route path="/player/result" Component={ResultWindow} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
