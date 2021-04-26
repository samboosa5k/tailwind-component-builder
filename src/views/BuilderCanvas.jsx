import React, {useContext} from "react";
import AppContext from "../contexts/AppContext";

export const BuilderCanvas = ({component}) => {
    const {state, dispatch} = useContext(AppContext)
    
    const handleSelectNode = (e) => {
        e.preventDefault();
        if (e.target.id) {
            if (e.target.id) {
                dispatch({type: 'SELECT_NODE', payload: e.target.id})
            } else {
                dispatch({type: 'SELECT_NODE', payload: ''})
            }
        }
    }
    
    return (
        <div onClick={handleSelectNode} className={`w-full h-full bg-gray-800 flex justify-center content-center items-center`}>
            {state.nodeArray.length > 0 ? (
                state.nodeArray.map((node, idx) => {
                    return <node key={`generated_node_${node.id}`} className={`mx-4 my-4`}/>
                })
            ) : (
                <p className={`text-white`}>No Components</p>
            )}
        </div>
    )
}