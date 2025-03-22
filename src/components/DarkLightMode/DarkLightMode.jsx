import React from "react";
import useLocalStorage from "./useLocalStorage";

const DarkLightMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark'); 
    function toggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    return (
        <div className={`${theme==='dark' ? 'dark' : ''}`}>
            <div className="border rounded-lg p-2 container mt-5 w-screen h-screen flex flex-col bg-white text-black items-center justify-center gap-4 transition-all duration-300 
                          dark:bg-black dark:text-white">
                <h1 className="font-bold text-7xl">Light And Dark Mode</h1>
                <h2>Current Theme - {theme}</h2>
                <p className="px-2 py-1">Lorem ipsum jbbis iuhdsiubds isbdsiudbs sidubsd  dolor sit amet consectetur adipisicing elit. Debitis, numquam corporis architecto dolores consequatur qui officia pariatur molestiae voluptatem, dolore aut totam? Fugit minima, voluptate beatae sint autem aspernatur ducimus?</p>
                <button className="border px-3 py-2 rounded-lg cursor-pointer text-lg duration-45 bg-black text-white dark:bg-white dark:text-black"
                        onClick={toggleTheme}>Switch to {theme==='dark' ? 'Light' : "Dark"} mode</button>
            </div>
        </div>
    )
}

export default DarkLightMode