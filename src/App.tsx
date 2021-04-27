import {hot} from 'react-hot-loader/root';
import React, {useState} from "react";
import {AppContextProvider} from "./contexts/AppContext";
import TagPicker from "./views/TagPicker";
import {BuilderCanvas} from "./views/BuilderCanvas";
import {NodeEditor} from "./views/NodeEditor";

const App = () => {
    // const [testArrayObj, setTestArrayObj] = useState(
    //     [{
    //         id: 1,
    //         type:'div',
    //         className: 'p-2 bg-gray-200 border-2 border-black',
    //         children: [{
    //             id: 2,
    //             type:'div',
    //             className: 'p-2 bg-gray-200 border-2 border-black',
    //             children: [{
    //                 id: 3,
    //                 type:'div',
    //                 className: '',
    //                 children: []
    //             }]
    //         }]
    //     }, {
    //         id: 11,
    //         type:'div',
    //         className: 'p-2 bg-gray-200 border-2 border-black',
    //         children: [{
    //             id: 12,
    //             type:'div',
    //             className: '',
    //             children: [{
    //                 id: 13,
    //                 type:'div',
    //                 className: '',
    //                 children: [{
    //                     id: 64,
    //                     type:'div',
    //                     className: '',
    //                     children: []
    //                 },
    //                     {
    //                         id: 256,
    //                         type:'div',
    //                         className: 'p-2 bg-gray-200 border-2 border-black',
    //                         children: []
    //                     }]
    //             }]
    //         }]
    //     }]
    // )
    
    const searchID = 256;
    
    
    // const objArrMap = (objArray) => {
    //     const mappedArray = objArray.map((obj) => {
    //         if (obj.id === searchID) {
    //             return {...obj, className: 'test'}
    //         } else {
    //             if (obj.children.length > 0) {
    //                 return {...obj, children: objArrMap(obj.children)}
    //             } else {
    //                 return obj;
    //             }
    //         }
    //     })
    //     return mappedArray;
    // }
    
    // useEffect(() => {
    //     console.log('obj array tree traversal test - ', objArrMap(testArrayObj));
    // }, [])
    
  
    
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