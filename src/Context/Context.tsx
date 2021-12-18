import { createContext } from "react";
import { TAppContext } from "./Interfaces/Context";

export const AppContext = createContext<TAppContext>({} as TAppContext);
