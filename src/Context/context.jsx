import React, { createContext, useContext, useRef } from "react";

const refContext = createContext();


const RefProvider = ({ children }) => {
    const useRefContext = useContext(refContext);
    const ref = useRef(null);
    return (
        <RefContext.Provider value={useRefContext}>
            {children}
        </RefContext.Provider>
    )
}

export { RefProvider, useRefContext };