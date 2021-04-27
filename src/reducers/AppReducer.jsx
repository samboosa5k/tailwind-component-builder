export const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUILT_COMPONENT':
            return {...state, nodeArray: action.payload};
        case 'UPDATE_NODE_HIERARCHY':
            return {...state, nodeHierarchy: action.payload};
        case 'SELECT_NODE':
            return {...state, selectedNode: action.payload}
        default:
            return state;
    }
}