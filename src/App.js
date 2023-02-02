import { Home, Login,Signup } from "./Pages";
import { HomeSearch, Homes,Flights } from "./Components";
import { Routes, Route, useParams } from "react-router-dom";
import { path } from "./Utils/Constans";

function App() {
  const params = useParams()["*"];

  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home></Home>}>
          <Route path={path.HOME} element={<HomeSearch></HomeSearch>}></Route>
          <Route path={path.HOMES} element={<Homes></Homes>}></Route>
          <Route path={path.FLIGHTS} element={<Flights></Flights>}></Route>
        </Route>

        <Route path={path.LOGIN} element={<Login></Login>}></Route>
        <Route path={path.SIGNUP} element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
