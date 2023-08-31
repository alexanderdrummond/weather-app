import "./App.css";
import { Fetching } from "./component/Fetch";

import { Geolocation } from "./component/geolocation";

import { Fetcher } from "./component/fetchingdata";



function App() {
  return (
    <>
      <Fetching/>
      <Geolocation />
      <Fetcher/>

    </>
  );
}

export default App;
