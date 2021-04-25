import React, {useContext} from "react";
import {CenterVH} from "../wrappers/CenterVH";
import {AppContext} from "../contexts/AppContext";

export const BuilderCanvas = ({component}) => {
    const {state, dispatch} = useContext(AppContext)
    
    const handleSelectNode = (e) => {
        e.preventDefault();
        if (e.target.id) {
            const findNodeInContext = state.nodeArray.find((node) => node.props.id === e.target.id);
            if (findNodeInContext) {
                dispatch({type: 'SELECT_NODE', payload: findNodeInContext})
            } else {
                dispatch({type: 'SELECT_NODE', payload: {}})
            }
        }
    }
    
    return (
        <div className={`w-full h-full bg-gray-800 flex justify-center content-center items-center`}>
            {state.nodeArray.length > 0 ? (
                state.nodeArray.map((node, idx) => {
                    return <div key={`generated_node_${node.id}`} className={`mx-4 my-4`}
                                onClick={handleSelectNode}>{node}</div>
                })
            ) : (
                <p className={`text-white`}>No Components</p>
            )}
        </div>
    )
}

