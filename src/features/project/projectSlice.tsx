import { createSlice } from "@reduxjs/toolkit";
import {  IProject } from "../../models/IProject";

interface productState {
    products: IProject[];
    isLoading: boolean;
    error: string;
} 

const initialState: productState  = {
    products: [],
    isLoading: false,
    error: ""

            // id: 4,
            // imageUrl: "some url here",
            // name: "Product4",
            // count: 4,
            // size: {
            //     "width": 200,
            //     "height": 200
            // },
            // weight: "200g",
            // comments: ["CommentModel", "CommentModel"]
}


export const projectSlice = createSlice ({
    name: "User",
    initialState,

    reducers: {
        projects: (state) => {
            console.log('products.state');
            
        }
        // increase: (state) => {
        //     state.value += 1;
        //   },
        //   decrease: (state) => {
        //     state.value -= 1;
        //   }
    }
})


// export const { increase, decrease } = counterSlice.actions;

export default projectSlice.reducer;