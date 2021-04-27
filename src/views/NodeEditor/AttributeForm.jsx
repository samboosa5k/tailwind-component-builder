import React, {useContext, useEffect} from "react";
import {AppContext} from "../../contexts/AppContext";

export const AttributeForm = ({editableAttributes, handleFormChangeAttribute}) => {
    const {state} = useContext(AppContext);
    return (
        Object.keys(editableAttributes).map((attributeName, idx) => (
            <div key={`edit_node_${state.selectedNode.props.id}_${idx}`}>
                <label htmlFor="email"
                       className="block text-sm font-medium text-gray-700">{attributeName}</label>
                <div className="mt-1">
                    <input id={attributeName} type="text" name="email"
                           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                           placeholder={state.selectedNode.props[attributeName]}
                           onChange={(e) => handleFormChangeAttribute(e, attributeName)}
                           value={editableAttributes[attributeName]}/>
                </div>
            </div>
        ))
    )
}