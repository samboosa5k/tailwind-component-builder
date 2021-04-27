import React, {useReducer} from "react";
import {appReducer} from "../reducers/AppReducer";
import {appState} from "../states/appState";

const initReducer = () => {
    return {
        ...appState
    }
}

interface AppStateProps {
    children: React.ReactNode;
}

export const AppContext = React.createContext(null);


export const AppContextProvider = ({children}:AppStateProps) => {
    const [state, dispatch] = useReducer(appReducer, {...appState}, initReducer);
    const appStateAccess = state;
   
    return (
        <AppContext.Provider value={{state, dispatch, appStateAccess}}>
            {children}
        </AppContext.Provider>
    )
}