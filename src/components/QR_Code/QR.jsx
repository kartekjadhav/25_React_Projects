import React, { useState } from "react";
import QRCode from "react-qr-code";

const QR = () => {
    const [input, setinput] = useState("");
    const [qrCodeInput, setqrCodeInput] = useState('Hello')
    function handleChange(){
        setqrCodeInput(input)
        setinput("")
    }

    return (
        <div className="my-5">
            <div>
                <input
                    className="border rounded-lg px-2 py-1"
                    type="text"
                    placeholder="Enter some text"
                    onChange={(e) => {setinput(e.target.value)}}
                    value={input}
                    />
                <button
                    disabled={(input && input.trim()!=='') ? false: true}
                    className="border cursor-pointer rounded-lg px-2 py-1"
                    onClick={handleChange}>
                    Submit
                </button>
            </div>
            <div className="mt-4">
                <QRCode  
                 size={256}
                 value={qrCodeInput}   
                />
            </div>
        </div>
    )
}

export default QR