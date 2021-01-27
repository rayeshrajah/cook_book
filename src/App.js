import "./styles/Theme.scss";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/userActions";
import LandingPage from "./components/LandingPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  const dispatch = useDispatch();
  dispatch(getUsers());
  return (
    <div>
      <NavigationBar />
      <LandingPage />
    </div>
  );
}

export default App;
