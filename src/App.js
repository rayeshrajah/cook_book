import './styles/Theme.scss';
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/userActions";
import LandingPage from "./components/LandingPage";


function App() {
  const dispatch = useDispatch();
  dispatch(getUsers());
  return (
   <LandingPage />
  );
}

export default App;
