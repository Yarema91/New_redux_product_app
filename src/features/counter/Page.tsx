// import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { decrease, increase } from "./counterSlice";

const Page = () => {
    const value = useSelector((state: RootStateOrAny) => state.counter.value);

    // export const rootReducer = combineReducers({
    //   dashboard: dashboardReducer,
    //   user: userReducer
    // });
    
    // export type RootState = ReturnType<typeof rootReducer>
    // let userData = useSelector((state: RootState) => {
    //   return state.user.data;
    // });
    const dispatch = useDispatch();

    return (
        <div>
        <h1>{value}</h1>
        <button onClick = {() => dispatch(increase())}> increase </button>
        <button onClick = {() => dispatch(decrease())}> decrease </button>
        </div>
  );
};

export default Page;
