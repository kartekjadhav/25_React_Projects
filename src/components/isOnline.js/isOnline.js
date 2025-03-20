import { useState, useEffect } from "react";

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    function setOffline(){
        setIsOnline(false)
    }

    function setOnline(){
        setIsOnline(true)
    }

    useEffect(() => {
        window.addEventListener('online', setOnline)
        window.addEventListener('offline', setOffline)

        return (() => {
            window.addEventListener('online', setOnline)
        window.addEventListener('offline', setOffline)
        })

    }, [])

    return isOnline
}

export default useOnlineStatus