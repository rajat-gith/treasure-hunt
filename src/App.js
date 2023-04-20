
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingScreen from "./screens/LandingScreen";
import GameScreen from "./screens/GameScreen";
import Nav from "./components/Nav";

function App() {
  

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen/>}/>
          <Route path="/game" Component={GameScreen}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
