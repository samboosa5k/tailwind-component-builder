import {AppContext} from "../contexts/AppContext";

export const appReducer = (state, action) => {
    switch(action.type){
        case 'ADD_NODE':
            return {
                ...state,
                nodeArray: [...state.nodeArray, action.payload]
            }
        case 'SELECT_NODE':
            return {
                ...state,
                selectedNode: action.payload
            }
        case 'UPDATE_NODE':
            return {
                ...state,
                selectedNode: action.payload,
                nodeArray: state.nodeArray.map((nodeObj) => {
                    if(nodeObj.props.id === action.payload.props.id){
                        return action.payload;
                    } else {
                        return nodeObj;
                    }
                })
            }
        default:
            return state;
    }
}