import React, {useEffect, useReducer} from "react";
import {appReducer} from "../reducers/AppReducer";

export const appState = {
    nodeArray: [],
    nodeProps: [],
    selectedNode: '',
}

const initReducer = () => {
    return {
        nodeArray: [],
        nodeProps: [],
        selectedNode: '',
    }
}

const AppContext = React.createContext(appState);

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, appState, initReducer);
    
   
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext;