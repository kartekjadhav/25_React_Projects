import { React, useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const Image_Slider = ({url, pages=1, limit=5}) => {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true)
                const response = await fetch(`${url}?page=${pages}&limit=${limit}`);
                const data = await response.json()
                if(data) setImages(data);
            } catch (error) {
                setError(error.message)
                console.log(error.message)
            } finally{
                setLoading(false)
            }
        }        
        fetchData()
    }, [])
    
    if (loading){
        return <div>Loading data | Please wait...</div>
    }
    
    function shiftLeft(){
        (currentImage === 0) ? setCurrentImage(images.length-1) : setCurrentImage(currentImage-1)  
    }

    function shiftRight(){
        (currentImage === images.length-1) ? setCurrentImage(0) : setCurrentImage(currentImage+1)  
    }

    return (
        <div className="mt-10 wrapper w-full h-full bg-cyan-800 flex flex-row justify-center items-center">
            {(error) ? 
                (<div>Error has occured | ${error}</div>) : 
                (   
                    <div className="flex flex-row justify-center relative items-center w-150 my-10">
                        <BsArrowLeftCircleFill onClick={shiftLeft} className="cursor-pointer absolute text-4xl text-white left-5"/>
                        {
                            images && images.length ? 
                            images.map((image, index) => (
                                <img 
                                    src={image.download_url} 
                                    alt={image.download_url}
                                    key={image.id}
                                    className={currentImage === index ? "w-full ease-linear h-full rounded-lg shadow-lg" : "hidden"}
                                />
                            ))
                            : null
                        }
                        <BsArrowRightCircleFill onClick={shiftRight} className="cursor-pointer absolute text-4xl text-white right-5"/>
                        <span className="absolute bottom-3 flex flex-row gap-5">
                            {
                                images && images.length ? 
                                images.map((image, index) => <button 
                                key={image.id}
                                className={`rounded-full w-3 h-3 ${index === currentImage ? "bg-amber-400":"bg-black"}`}
                                ></button>)
                                : null
                            }
                        </span>
                    </div>
                )
            } 
        </div>
    )
}

export default Image_Slider