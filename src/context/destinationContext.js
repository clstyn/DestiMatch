import { createContext, useReducer } from "react";

export const DestinationContext = createContext();

export const destinationReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DESTINATIONS':
            return {
                destination: action.payload
            }
    }

}

const DestinationsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(destinationReducer, {
        destination: null
    })

    return (
        <FacilityContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FacilityContext.Provider>
    )
}

export default DestinationsContextProvider