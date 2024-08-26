import "./App.css";
import Options from "./options";
import Flashlight from "./flashlight";
import Game from "./game";
import React, { useState } from "react";

function App() {
  const [hideMenu, setHideMenu] = useState(false);
  const [hideFlashlight, setHideFlashlight] = useState(true);
  const [hideGame, setHideGame] = useState(true);
  const [hideRobots, setHideRobots] = useState(true);
  return (
    <div className="App">
      <Options
        hide={hideMenu}
        setHide={(newHide) => setHideMenu(newHide)}
        // hideFlash={hideFlashlight}
        setHideFlash={(newHide) => setHideFlashlight(newHide)}
        setHideGame={(newHide) => setHideGame(newHide)}
      />
      <Flashlight
        hide={hideFlashlight}
        setHide={(newHide) => setHideFlashlight(newHide)}
      />
      <Game hide={hideGame} />
    </div>
  );
}

export default App;
