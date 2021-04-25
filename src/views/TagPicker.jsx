import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import {CenterVH} from "../wrappers/CenterVH";
import {AppContext} from "../contexts/AppContext";
import {nanoid} from "nanoid";

export const TagPicker = () => {
    const {state, dispatch} = useContext(AppContext);
    const [inputString, setInputString] = useState('');
    const [validationResponse, setValidationResponse] = useState('');
    
    const validHTML = (queryString) => {
        return document.createElement(queryString.toUpperCase()).toString() != "[object HTMLUnknownElement]";
    }
    
    const generateElement = (queryString) => {
        const createdElement = React.createElement(queryString, {id:`${nanoid(4)}`, className:'w-32 h-32 bg-white'}, [])
        dispatch({type: 'ADD_NODE', payload: createdElement})
        console.log('dispatched -> ', createdElement)
    }
    
    const handleQueryValidation = (queryString) => {
        setValidationResponse('')
        try {
            const isValidElement = validHTML(queryString);
            console.log('react isvalidelement - ', isValidElement)
            if(isValidElement){
                setValidationResponse('valid element!');
                generateElement(queryString)
            } else {
                setValidationResponse('Not an element!');
            }
            
        } catch (e) {
            console.error('not a valid element query -> ', e)
        }
    }
    
    const updateInputField = (e) => {
        const fieldValue = e.target.value;
        setInputString(fieldValue);
    }
    
    return (
        
        <CenterVH>
            <div className={`w-4/12 h-auto mx-auto`}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Query Element</label>
                <div className="mt-1">
                    <input onChange={updateInputField} type="text" name="htmlelement" id="htmlelement"
                           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                           placeholder="div" value={inputString}/>
                </div>
                <CenterVH>
                    <button type="button" onClick={()=>handleQueryValidation(inputString)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Check if Valid Element
                    </button>
                </CenterVH>
                <p>{validationResponse}</p>
            </div>
        
        </CenterVH>
    
    )
}