import {Home} from "./Pages";
import { HomeSearch,Homes } from "./Components";
import {Routes,Route,useParams} from "react-router-dom";
import {path} from "./Utils/Constans";

function App() {
  const params = useParams()["*"];

  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home></Home>}>
          <Route path={path.HOME} element={<HomeSearch></HomeSearch>}></Route>
          <Route path={path.HOMES} element={<Homes></Homes>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
