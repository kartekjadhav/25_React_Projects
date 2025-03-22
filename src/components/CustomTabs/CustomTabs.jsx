import React, { useState } from "react";

const CustomTabs = ({tabItems}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    

    return (
        <div className="w-screen h-screen mt-5 border">
            <div className="flex flex-row items-center justify-evenly">
                {tabItems.map((item, index) => 
                    <div key={item.label} onClick={() => setCurrentIndex(index)} className="border px-3 py-2 cursor-pointer rounded-lg mb-5" style={{color: currentIndex === index ? 'red' : 'black'}}>item.label</div>
                )}
            </div>
            <div>
                {tabItems[currentIndex] && tabItems[currentIndex].content}
            </div>
        </div>
    )
}

export default CustomTabs