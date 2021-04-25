import {hot} from 'react-hot-loader/root';
import React from "react";
import PropTypes from 'prop-types';
import {TagPicker} from "./views/TagPicker.jsx";
import {BuilderCanvas} from "./views/BuilderCanvas";
import {AppContextProvider} from "./contexts/AppContext";
import {NodeEditor} from "./views/NodeEditor";

const App = () => {
    return (
        <AppContextProvider>
            <div className={`w-screen h-screen flex flex-col bg-gradient-to-r from-gray-400 md:from-gray-300`}>
                <TagPicker/>
                <NodeEditor/>
                <BuilderCanvas/>
            </div>
        </AppContextProvider>
    )
}

export default hot(App);