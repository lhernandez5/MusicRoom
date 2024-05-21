import React from "react";
import Room from "./Room";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/"></Route>
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default Homepage;
