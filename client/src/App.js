import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProvide } from "./context/myContext";
import { Details } from "./view/Details";
import { Edit } from "./view/Edit";
import { Home } from "./view/Home";
import { New } from "./view/New";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <MyProvide>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/:id' element={<Details/>}></Route>
          <Route path='/pets/new' element={<New/>}></Route>
          <Route path='/pets/:id/edit' element={<Edit/>}></Route>
        </Routes>
      </MyProvide>
      </BrowserRouter>
    </div>
  );
}

export default App;
