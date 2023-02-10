import { createContext, useState } from "react";

export const Pizza_data = createContext();

function Context({children}){
    const [pizza, setPizza] = useState({base: '', toppings:[]})

    return (
        <Pizza_data.Provider value={[pizza, setPizza]}>
            {children}
        </Pizza_data.Provider>
    )
}

export default Context;