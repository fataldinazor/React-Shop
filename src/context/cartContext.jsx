import { createContext } from "react";
import cartItemReducer, { initialState } from "../reducer/reducer";


export const CartContext = createContext(initialState);
