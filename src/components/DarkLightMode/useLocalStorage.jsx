import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(() => {
        let current_value;
        try {
            current_value = JSON.parse(localStorage.getItem(key) || String(defaultValue)); 
        } catch (error) {
            console.log(error);
            current_value = String(defaultValue)
        }
        return current_value
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}