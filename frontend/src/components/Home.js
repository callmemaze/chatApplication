import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";

const Home = () => {
  const [userName, setUser] = useState();
  const [room, setRoom] = useState();
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="userName"
            className="joinInput"
            type="text"
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!userName || !room ? e.preventDefault() : null)}
          to={`/room?userName=${userName}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
