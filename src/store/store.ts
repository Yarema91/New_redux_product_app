import { configureStore } from "@reduxjs/toolkit";
// import React from "react";

import counterReducer from "../features/counter/counterSlice";


export default configureStore({
 reducer: {
     counter: counterReducer
 }
});

 
