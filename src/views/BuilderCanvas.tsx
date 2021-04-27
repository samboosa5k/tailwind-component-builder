import React, {ReactElement, ReactNode, useContext, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {AppContext} from "../contexts/AppContext";

export const BuilderCanvas = () => {
    const {state, dispatch} = useContext(AppContext)
    const builderCanvasRef = useRef();
    
    const handleSelectNode = (e:React.MouseEvent) => {
        const {id} = e.currentTarget as HTMLElement;
        console.log('e current target -', e.currentTarget)
            if (id) {
                dispatch({type: 'SELECT_NODE', payload: id})
            } else {
                dispatch({type: 'SELECT_NODE', payload: ''})
            }
    }
    
    // const mountGeneratedComponent = (generatedComponent) => {
    //     console.log('mounting component -', generatedComponent)
    //         ReactDOM.render({...generatedComponent, ref: builderCanvasRef}, document.getElementById('builderCanvas'));
    // }
    
    // useEffect(()=>{
    //     if(state.nodeArray.length > 0){
    //         // mountGeneratedComponent(state.nodeArray[0]);
    //     }
    //
    // },[state.nodeArray])
    
    return (
        <div id={`builderCanvas`} ref={builderCanvasRef} className={`w-full h-full bg-gray-800 flex justify-center content-center items-center`}>
            {
                state.nodeArray && state.nodeArray.map((node: ReactElement, idx: number) => (
                    <div key={`node_wrapper_${node.props.id}_${idx}`} id={node.props.id} onClick={handleSelectNode}>
                        {node}
                    </div>
                ))}
        </div>
    )
}