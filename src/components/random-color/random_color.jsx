import { React, useState } from 'react'

const RandomColor = () => {
    const [bgcolor, setBgcolor] = useState("#010101");

    function changeRGB() {
        let r = Math.floor(Math.random() * 90 + 10)
        let g = Math.floor(Math.random() * 90 + 10)
        let b = Math.floor(Math.random() * 90 + 10)
        let color = `rgb(${r}, ${g}, ${b})`
        setBgcolor(color)
        console.log(color)
    }

    function changeHEX() {
        let str = '0123456789abcdef'
        let hex = '#';
        for (let i = 0; i < 6; i++){
            hex += str[Math.floor(Math.random()*16)];
        }
        setBgcolor(hex)
        console.log(hex);
    }

    function changeRandom(){
        (Math.random() > 0.5) ? changeHEX() : changeRGB() 
    }

    return (
        <div className='container w-screen h-screen' style={{backgroundColor: bgcolor}}>
            <div className="buttons flex flex-row justify-around mt-3">
                <button onClick={changeHEX} className="text-amber-50 cursor-pointer  border px-3 py-2 rounded-lg">Change HEX</button>
                <button onClick={changeRGB} className="text-amber-50 cursor-pointer  border px-3 py-2 rounded-lg">Change RGB</button>
                <button onClick={changeRandom} className="text-amber-50 cursor-pointer  border px-3 py-2 rounded-lg">Change Random</button>
            </div>
            <div className="color text-amber-50">
                {<h1>{bgcolor}</h1>}
            </div>
        </div>
    )
}

export default RandomColor