import { BrowserRouter } from "react-router-dom";
import RemoteComponent from "./components/RemoteComponent";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <h1>Remote Application (Standalone Mode)</h1>
        <RemoteComponent standalone={true} />
      </div>
    </BrowserRouter>
  );
}

export default App;
