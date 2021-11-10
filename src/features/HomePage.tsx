// import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { decrease, increase } from "./counter/counterSlice";
import { useAppSelector } from "../hooks/redux";
import ProjectContainer from "./project/ProjectContainer";

const HomePage = () => {

  const value = useAppSelector(state => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>
      <div><h1>{value}</h1>
        <button onClick={() => dispatch(increase())}> increase </button>
        <button onClick={() => dispatch(decrease())}> decrease </button>
      </div>
      <ProjectContainer />
    </div>
  );
};

export default HomePage;
