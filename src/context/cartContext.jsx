import { createContext } from "react";
import { initialState } from "../reducer/reducer";


export const CartContext = createContext(initialState);
