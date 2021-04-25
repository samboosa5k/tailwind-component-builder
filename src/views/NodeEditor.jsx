import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../contexts/AppContext";
import {CenterVH} from "../wrappers/CenterVH";

export const NodeEditor = () => {
    const {state, dispatch} = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const [editableAttributes, setEditableAttributes] = useState([]);
    
    useEffect(() => {
        if (Object.keys(state.selectedNode).length > 0) {
            setVisible(true);
        }
    }, [state.selectedNode])
    
    useEffect(() => {
        if (visible) {
            const attributeValueArray = Object.keys(state.selectedNode.props).reduce((acc, key) => {
                return [...acc, {
                    attributeName: key,
                    attributeValue: state.selectedNode.props[key]
                }]
            }, [])
            setEditableAttributes(attributeValueArray);
        }
    }, [visible])
    
    const handleAttributeFormChange = (e, idx) => {
        const {id, value} = e.target;
        const newAttributeArray = editableAttributes.map((attributeObj, idx2) => {
            if (idx2 === idx) {
                return {
                    ...attributeObj,
                    attributeValue: value
                }
            } else {
                return attributeObj;
            }
        })
        setEditableAttributes(newAttributeArray)
    }
    
    const handleNodeUpdate = () => {
        const newProps = editableAttributes.reduce((acc, attributeObj) => {
            return {
                ...acc,
                [attributeObj.attributeName]: attributeObj.attributeValue
            }
        }, {})
        const newNodeObj = {...state.selectedNode, props: newProps}
        dispatch({type: 'UPDATE_NODE', payload: newNodeObj})
    }
    
    return (
        visible && editableAttributes.length > 0 ? (
            <CenterVH>
                <div className={`w-4/12 h-auto mx-auto`}>
                    {
                        
                        editableAttributes.map((attributeObj, idx) => (
                            <div key={`edit_node_${attributeObj.id}_${idx}`}>
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-700">{attributeObj.attributeName}</label>
                                <div className="mt-1">
                                    <input id={attributeObj.attributeName} type="text" name="email"
                                           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                           placeholder={attributeObj.attributeValue}
                                           onChange={(e) => handleAttributeFormChange(e, idx)}
                                           value={editableAttributes[idx].attributeValue}/>
                                </div>
                            </div>
                        ))
                    }
                    <CenterVH>
                        <button type="button" onClick={handleNodeUpdate}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update Node
                        </button>
                    </CenterVH>
                </div>
            </CenterVH>) : null)
}