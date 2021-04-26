import {hot} from 'react-hot-loader/root';
import React, {useEffect, useState} from "react";
import {AppContextProvider} from "./contexts/AppContext";

const App = () => {
    
    const [testArrayObj, setTestArrayObj] = useState(
        [{
            id: 1,
            className: '',
            children: [{
                id: 2,
                className: '',
                children: [{
                    id: 3,
                    className: '',
                    children: []
                }]
            }]
        }, {
            id: 11,
            className: '',
            children: [{
                id: 12,
                className: '',
                children: [{
                    id: 13,
                    className: '',
                    children: [{
                        id: 64,
                        className: '',
                        children: []
                    },
                        {
                            id: 256,
                            className: '',
                            children: []
                        }]
                }]
            }]
        }]
    )
    
    const searchID = 256;
    
    
    const objArrMap = (objArray) => {
        const mappedArray = objArray.map((obj) => {
            if (obj.id === searchID) {
                return {...obj, className: 'test'}
            } else {
                if (obj.children.length > 0) {
                    return {...obj, children: objArrMap(obj.children)}
                } else {
                    return obj;
                }
            }
        })
        return mappedArray;
    }
    
    useEffect(() => {
        console.log('obj array tree traversal test - ', objArrMap(testArrayObj));
    }, [])
    
    return (
        <AppContextProvider>
            <div className={`w-screen h-screen flex flex-col bg-gradient-to-r from-gray-400 md:from-gray-300`}>
                {/*<TagPicker/>*/}
                {/*<NodeEditor/>*/}
                {/*<BuilderCanvas/>*/}
            </div>
        </AppContextProvider>
    )
}

export default hot(App);