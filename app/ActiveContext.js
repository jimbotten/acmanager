import { createContext, useState, useContext } from "react";

const ActiveContext = createContext({ active: "1.1.json",  setActive: () => {} });
// const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
    const [active, setActive] = useState('1.1.json')

    return (
        <ActiveProvider.Provider value={{ active, setActive }}>
            {children}
        </ActiveProvider.Provider>
    );
};
export const useActiveContext = () => useContext(ActiveContext);
export default ActiveProvider;