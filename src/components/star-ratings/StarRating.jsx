import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; 

const StarRating = ({noOfStars=5}) => {
    const [rating, setRating] = useState(-1)
    const [hover, setHover] = useState(-1)

    function handleOnclick(index){
        setRating(index)
    }

    function handlOnEnter(index){
        setHover(index)
    }

    function handleOnleave(){
        setHover(rating)
    }
    
    return (
        <div className="wrapper w-screen h-screen bg-emerald-800 flex flex-row justify-center">
            <div className="container mt-20 flex flex-row justify-center gap-4 w-full text-4xl">
                {[...Array(noOfStars)].map((_, index) => {
                    return <FaStar
                        key={index}
                        onClick={() => handleOnclick(index)}
                        onMouseEnter={() => handlOnEnter(index)}
                        onMouseLeave={() => handleOnleave()}
                        style={{
                            color: (index <= rating || index <= hover) ? ("gold") : (null)
                        }}
                    />
                })}
            </div>
        </div>
    )
}

export default StarRating