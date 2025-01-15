import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="container ">
      <Header onShowText={() => setShowText(!showText)} />
      <div>{showText == true ? "Shown" : "Hidden"}</div>
    </div>
  );
};

export default App;
