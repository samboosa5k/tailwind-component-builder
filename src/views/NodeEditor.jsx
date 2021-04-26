import React, {useContext, useEffect, useState} from "react";
import AppContext from "../contexts/AppContext";
import {CenterVH} from "../wrappers/CenterVH";
import {BorderTools} from "./NodeEditor/BorderTools";
import {AttributeForm} from "./NodeEditor/AttributeForm";

export const NodeEditor = () => {
    const {state, dispatch} = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const [editableAttributes, setEditableAttributes] = useState([]);
    
    useEffect(() => {
        if (state.selectedNode && Object.keys(state.selectedNode).length > 0) {
            setVisible(true);
        }
    }, [state.selectedNode])
    
    useEffect(() => {
        if (visible) {
            setEditableAttributes(state.selectedNode.props);
        }
    }, [visible])
    
    const handleFormChangeAttribute = (e, attributeName) => {
        const {value} = e.target;
        setEditableAttributes({...editableAttributes, [attributeName]: value})
    }
    
    // const handleNodeUpdate = () => {
    //     const newNodeObj = {...state.selectedNode, props: editableAttributes}
    //     dispatch({type: 'UPDATE_NODE', payload: newNodeObj})
    // }
    
    const handleUpdateClassNameAttribute = (rgx, classNameString, replaceString) => {
        const clearedString = classNameString.replace(rgx, '')
        const insertedString = `${clearedString} ${replaceString}`;
        setEditableAttributes({...editableAttributes, className: insertedString})
    }
    
    return (
        visible && Object.keys(editableAttributes).length > 0 ? (
            <CenterVH>
                <div className={`w-4/12 h-auto mx-auto`}>
                    <CenterVH>
                        <AttributeForm editableAttributes={editableAttributes}
                                       handleFormChangeAttribute={handleFormChangeAttribute}/>
                        
                        <BorderTools classNameAttributeString={editableAttributes['className']}
                                     handleUpdateClassNameAttribute={handleUpdateClassNameAttribute}/>
                        
                        <button type="button" onClick={handleNodeUpdate}
                                className="w-full my-4 items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update Node
                        </button>
                    </CenterVH>
                </div>
            </CenterVH>) : null)
}