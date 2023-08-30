import "./App.css";
import { Fetching } from "./component/fetch";

import { Geolocation } from "./component/geolocation";


function App() {
  return (
    <>
      <Fetching/>
      <Geolocation />
    </>
  );
}

export default App;
