
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingScreen from "./screens/LandingScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen/>}/>
          <Route path="/game" Component={GameScreen}/>
        </Routes>
      </Router>
      {/* <button onClick={handleClick}>Signin With Google</button> */}
    </div>
  );
}

export default App;
