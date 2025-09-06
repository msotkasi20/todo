//useUser koukku luo pääsyn kontekstiin, eli user stateen ja tilamuuttjiin

import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
    return useContext(UserContext)
}