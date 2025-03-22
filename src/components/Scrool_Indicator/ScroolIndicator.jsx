import React, { useEffect, useState } from "react";

const ScroolIndicator = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    
    function scrollHandler(){
        console.log(document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight  
        )
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolledHeight = document.documentElement.scrollTop;
        let scrollPercentage = (scrolledHeight/height) * 100 
        setScrollHeight(scrollPercentage)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [])
    
    return (
        <div className="fixed top-0 h-10 bg-black text-white pt-2 w-full text-center z-10">
            <h2>Scroll Height Indicator</h2>
            <div className="scrollIndicator h-3/12 bg-pink-700 rounded-lg" style={{width: `${scrollHeight}%`}}></div>
        </div>
    )
}

export default ScroolIndicator