import "./styles/Theme.scss";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions/userActions";
import LandingPage from "./components/LandingPage";
import NavigationBar from "./components/NavigationBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faGripLines } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faGripLines)

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
