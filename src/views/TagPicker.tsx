import React, {ReactNode, useContext, useEffect, useState} from "react";
import {CenterVH} from "../wrappers/CenterVH";
import {AppContext} from "../contexts/AppContext";
import {nanoid} from "nanoid";
import {NodeArrayObject} from "../states/appState";

const TagPicker = () => {
    const {state, dispatch} = useContext(AppContext);
    const [inputString, setInputString] = useState('');
    const [validationResponse, setValidationResponse] = useState(false);
    
    // useEffect(() => {
    //     if (validationResponse) {
    //         generateElement(inputString)
    //     }
    // }, [validationResponse])
    
    const validHTML = (queryString:string) => {
        return document.createElement(queryString.toUpperCase()).toString() != "[object HTMLUnknownElement]";
    }
    
    const generateElement = (queryString:string) => {
        const elemID = `${nanoid(4)}`;
        const createdElement = React.createElement(queryString, {
            id: elemID,
            className: 'w-32 h-32 p-2 border-2 border-black bg-white'
        }, [])
        
        // dispatch({
        //     type: 'ADD_NODE',
        //     payload: createdElement
        // })
        //
        // dispatch({
        //     type:'ADD_NODE_PROPS',
        //     payload: {
        //         id: elemID,
        //         className: 'w-32 h-32 p-2 border-2 border-black bg-white',
        //         children: {}
        //     }
        // })
        //
        console.log('dispatched -> ', createdElement)
    }
    
    const generateReactNode = (idString:string, typeString:string, classString:string, childrenArray: NodeArrayObject[] ) => {
        // return {type:typeString, id:idString, class: classString, children: childrenArray}
        return React.createElement(typeString, {
            key: `created_${nanoid(4)}`,
            id: idString,
            className: classString,
        },[...childrenArray]);
    }
    
    const handleQueryValidation = (queryString:string) => {
        try {
            const isValidElement = validHTML(queryString);
            console.log('react isvalidelement - ', isValidElement)
            if (isValidElement) {
                setValidationResponse(true);
            } else {
                setValidationResponse(false);
            }
            
        } catch (e) {
            console.error('not a valid element query -> ', e)
        }
    }
    
    const updateInputField = (e:any) => {
        const fieldValue = e.target.value;
        setInputString(fieldValue);
    }
    
    const objArrMap = (objArray: NodeArrayObject[]):ReactNode[] => {
        const mappedArray = objArray.map((obj) => {
            if(validHTML(obj.type)){
                if (obj.children.length > 0) {
                    const newNode = generateReactNode(obj.id, obj.type, obj.classString, [])
                    return {...newNode, props:{...newNode.props, children: objArrMap(obj.children)}}
                } else {
                    return generateReactNode(obj.id, obj.type, obj.classString, obj.children);
                }
            } else {
                return generateReactNode('testID', 'div', 'p-2 border border-2 border-black',[])
            }
      
        })
        return mappedArray;
    }
    
    useEffect(()=>{
        if(state.nodeHierarchy){
            const generatedReactNodes = objArrMap(state.nodeHierarchy);
            console.log('nodeHierarchy input -> ', state.nodeHierarchy)
            console.log('node generation -> ', generatedReactNodes)
            dispatch({type: 'SET_BUILT_COMPONENT', payload: generatedReactNodes})
        }
    },[state.nodeHierarchy])
    
    // useEffect(()=>{
    //     if(state.nodeArray.length > 0){
    //         const testComponent = <div>Hello Div</div>;
    //         console.log('testComponent - ', testComponent)
    //     }
    //
    // },[state.nodeArray])
    
    return (
        
        <CenterVH>
            <div className={`w-4/12 h-auto mx-auto`}>
                <h1>Hello</h1>
                {/*<label htmlFor="email" className="block text-sm font-medium text-gray-700">Query Element</label>*/}
                {/*<div className="mt-1">*/}
                {/*    <input onChange={updateInputField} type="text" name="htmlelement" id="htmlelement"*/}
                {/*           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"*/}
                {/*           placeholder="div" value={inputString}/>*/}
                {/*</div>*/}
                {/*<CenterVH>*/}
                {/*    <button type="button" onClick={() => handleQueryValidation(inputString)}*/}
                {/*            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                {/*        Create Element*/}
                {/*    </button>*/}
                {/*    <button type="button" onClick={() => handleQueryValidation(inputString)}*/}
                {/*            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
                {/*        Insert Child*/}
                {/*    </button>*/}
                {/*</CenterVH>*/}
                {/*<p>{(validationResponse) ? 'You just created a new element!' : 'Sorry, that tag type is not recognized'}</p>*/}
            </div>
        
        </CenterVH>
    
    )
}
export default TagPicker;