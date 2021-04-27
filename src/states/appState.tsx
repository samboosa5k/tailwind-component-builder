import {ReactNode} from "react";

export interface NodeArrayObject {
    id: string;
    type: string;
    classString: string;
    children: NodeArrayObject[]
}

export interface AppState {
    nodeArray: ReactNode[];
    nodeHierarchy: NodeArrayObject[];
    selectedNode: string;
}

export const appState:AppState = {
    nodeArray:[],
    nodeHierarchy: [{
        id: '1',
        type:'div',
        classString: 'w-32 h-32 bg-white',
        children: [{
            id: '2',
            type:'div',
            classString: '',
            children: [{
                id: '3',
                type:'div',
                classString: '',
                children: []
            }]
        }]
    }, {
        id: '11',
        type:'div',
        classString: '',
        children: [{
            id: '12',
            type:'div',
            classString: '',
            children: [{
                id: '13',
                type:'div',
                classString: '',
                children: [{
                    id: '64',
                    type:'div',
                    classString: 'w-8 h-8 bg-red-200',
                    children: []
                },
                    {
                        id: '256',
                        type:'div',
                        classString: '',
                        children: []
                    }]
            }]
        }]
    }],
    selectedNode: '',
}