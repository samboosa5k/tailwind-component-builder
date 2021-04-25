import React, {useReducer} from "react";
import {appReducer} from "../reducers/AppReducer";

export const appState = {
    nodeArray: []
}

const initReducer = () => {
    return {
        nodeArray: [],
        selectedNode: {}
    }
}

export const AppContext = React.createContext(appState);

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, appState, initReducer);
    
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}