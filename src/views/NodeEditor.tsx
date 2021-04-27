import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../contexts/AppContext";
import {CenterVH} from "../wrappers/CenterVH";
import {BorderTools} from "./NodeEditor/BorderTools";
import {AttributeForm} from "./NodeEditor/AttributeForm";
import {NodeArrayObject} from "../states/appState";

export const NodeEditor = () => {
    const {state, dispatch} = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const [editableAttributes, setEditableAttributes] = useState([]);
    
    useEffect(() => {
        if (state.selectedNode) {
            setVisible(true);
        }
    }, [state.selectedNode])
    
    // useEffect(() => {
    //     if (visible) {
    //         setEditableAttributes(state.selectedNode.props);
    //     }
    // }, [visible])
    
    // const handleFormChangeAttribute = (e, attributeName) => {
    //     const {value} = e.target;
    //     setEditableAttributes({...editableAttributes, [attributeName]: value})
    // }
    
    // const handleNodeUpdate = () => {
    //     const newNodeObj = {...state.selectedNode, props: editableAttributes}
    //     dispatch({type: 'UPDATE_NODE', payload: newNodeObj})
    // }
    
    // const handleUpdateClassNameAttribute = (rgx, classNameString, replaceString) => {
    //     const clearedString = classNameString.replace(rgx, '')
    //     const insertedString = `${clearedString} ${replaceString}`;
    //     setEditableAttributes({...editableAttributes, className: insertedString})
    // }
    
    const objArrMap = (objArray: NodeArrayObject[] ):NodeArrayObject[] => {
        const mappedArray = objArray.map((obj) => {
            if (obj.id === state.selectedNode) {
                return {...obj, classString: `${obj.classString} border-4 border-blue-500`}
            } else {
                if (obj.children.length > 0) {
                    return {...obj, children: objArrMap([...obj.children, obj.children[0]])}
                } else {
                    return obj;
                }
            }
        })
        return mappedArray;
    }
    
    const handleModifyTree = (objArray: NodeArrayObject[]) => {
        const modifiedArray = objArrMap(objArray);
        dispatch({type: 'UPDATE_NODE_HIERARCHY', payload: modifiedArray})
        console.log('handleModifyTree - ', modifiedArray)
    }
    
    return (
        visible ? (
            <CenterVH>
                <div className={`w-4/12 h-auto mx-auto`}>
                    <CenterVH>
                        {/*<AttributeForm editableAttributes={editableAttributes}*/}
                        {/*               handleFormChangeAttribute={handleFormChangeAttribute}/>*/}
                        
                        {/*<BorderTools classNameAttributeString={editableAttributes['className']}*/}
                        {/*             handleUpdateClassNameAttribute={handleUpdateClassNameAttribute}/>*/}
                        
                        {/*<button type="button" onClick={}*/}
                        {/*        className="w-full my-4 items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                        {/*    Update Node*/}
                        {/*</button>*/}
                        <button type="button" onClick={()=>handleModifyTree(state.nodeHierarchy)}
                                className="w-full my-4 items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Rebuild
                        </button>
                    </CenterVH>
                </div>
            </CenterVH>) : null)
}