import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()
    return(
        <UseContext.Provider value={{user, setUser}}>
            {children}
        </UseContext.Provider>
    )

}

export default UserContextProvider