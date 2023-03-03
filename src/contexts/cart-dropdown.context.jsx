import React, { createContext, useState } from "react";

export const DropdownContext = createContext({
    isDropped : false,
    setIsDropped: () => null,
})

export const DropdownProvider = ({children}) => {
    const [isDropped, setIsDropped] = useState(false);
    const value = {isDropped, setIsDropped};

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}