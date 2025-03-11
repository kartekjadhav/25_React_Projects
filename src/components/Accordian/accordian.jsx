import React, { useEffect, useState } from 'react'
import data from './data.js'

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [selectedIds, setSelectedIds] = useState([])
    const [multiselect, setMultiselect] = useState(false);

    function handleSelectionClick(id){
        if (!multiselect){
            setSelected(id === selected ? null : id)         
        } else{
            if (selectedIds.includes(id)){
                setSelectedIds(selectedIds.filter(curr_id => curr_id!== id))
            }
            else {
                setSelectedIds([...selectedIds, id])
            }
        }
    }
    
    function toggleMultiselect() {
        setMultiselect(prev => !prev)
    }

    return (
        <div className="wrapper mt-10 h-screen w-screen flex flex-row justify-center items-center">
            <div className="accordian flex flex-col items-center">
                <button onClick={toggleMultiselect} className='border w-50 px-3 py-2 bg-amber-600 text-white cursor-pointer'>Enable Multiselect</button>
                {
                    data && data.length > 0 ? 
                    (
                        data.map((dataItem) => (
                            <div key={dataItem.id} className="item bg-amber-700 rounded-lg p-5 m-2 border w-200">
                                <div onClick={() => handleSelectionClick(dataItem.id)} 
                                    className="title flex flex-row justify-between text-white m-2 cursor-pointer">
                                    <h1>{dataItem.question}</h1>
                                    <span>+</span>
                                </div>
                                {
                                    (selected === dataItem.id || (multiselect && selectedIds.includes(dataItem.id))) ?
                                    <div className='content text-white h-auto'>{dataItem.answer}</div>:
                                    null
                                }
                            </div>
                        )) 
                    ):
                    (<h1>No data found</h1>)
                }
            </div>
        </div>
    )
}

export default Accordian