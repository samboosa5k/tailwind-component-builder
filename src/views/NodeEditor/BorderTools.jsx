import React, {useEffect} from "react";

import * as tailwindConfig from '../../../tailwind.config';

export const BorderTools = ({classNameAttributeString, handleUpdateClassNameAttribute}) => {
    const borderRadiusObj = tailwindConfig.theme.borderRadius;
    const modifiers = Object.keys(borderRadiusObj);
    
    const tailwindRegex = /\brounded*\S+\b/g;
    
    const composeBorderClass = (modifierString) => {
        return `rounded-${modifierString}`
    }
    
    return (
        modifiers.map((mod, idx) => (
            <button key={`border_tools_${idx}`} type="button"
                    onClick={() => handleUpdateClassNameAttribute(tailwindRegex, classNameAttributeString, composeBorderClass(mod))}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {mod}
            </button>
        ))
    )
}