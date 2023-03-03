import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
    const [state, setState] = useState({[stateVar] : value});
    function update(val){
        setState({'key' : val});
    }

  return [state, update];
};

export default useLocalStorage;
