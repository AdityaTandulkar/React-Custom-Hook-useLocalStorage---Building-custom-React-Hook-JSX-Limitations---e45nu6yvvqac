import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
    const [state, setState] = useState(value);
    function update(key, val){
        localStorage.setItem(key, val);
    }
    update(stateVar, state);

  return [state, setState];
};

export default useLocalStorage;
