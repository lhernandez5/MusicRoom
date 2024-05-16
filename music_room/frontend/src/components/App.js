import React from "react";
import Homepage from "./Homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Homepage}></Route>
        <Route path="/join" Component={RoomJoinPage}></Route>
        <Route path="/create" Component={CreateRoomPage}></Route>
      </Routes>
    </Router>
  );
};

export default App;
