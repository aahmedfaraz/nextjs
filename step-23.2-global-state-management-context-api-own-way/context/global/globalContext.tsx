import { createContext } from "react";
import { GlobalStateType } from "../types";

const globalContext = createContext<any>({});

export default globalContext;