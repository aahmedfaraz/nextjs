import { Dispatch, SetStateAction } from "react";

export interface Timestamp {
    hours : number 
    minutes : number
    seconds : number
}

export interface TimestampState {
    timestamp : Timestamp
    setTimestamp : Dispatch<SetStateAction<{ [timestamp : string] : Timestamp }>>
}