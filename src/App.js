import "./styles/Theme.scss";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/userActions";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  dispatch(getUsers());
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
