import { createContext } from "react";
import { TimestampState } from "./types";

const stopwatchContext = createContext<TimestampState>({
    timestamp : {
        hours : 0,
        minutes : 0,
        seconds : 0,
    },
    setTimestamp : () => null,
})

export default stopwatchContext;