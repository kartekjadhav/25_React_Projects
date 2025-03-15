import { React, useEffect, useState } from 'react'

const Load_more = ({url, limit=20, skip=20}) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [clicksCount, setClicksCount] = useState(0);
    const [loadDisable, setLoadDisable] = useState(false);

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true);
                const response = await fetch(`${url}?limit=${limit}&skip=${clicksCount*skip}`);
                const data = await response.json();
                console.log(data.products);
                setProducts([...products, ...data.products]);
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        } 
        
        fetchData()
    }, [clicksCount])


    useEffect(() => {
        if (products.length === 100) setLoadDisable(true)
    }, [products])

    function increaseClick(){
        setClicksCount(clicksCount + 1)
    }

    if (loading) return <h2>Fetching the product list | Please wait</h2>
    if (error) return <h2>An error has occured | {error}</h2>
    return <div className="container flex flex-col items-center">
        <div className="products grid grid-cols-4 gap-2">
            {products.map((product, index) => 
                <div key={product.id} className="border text-center">
                    <img src={product.thumbnail} alt={product.title} />
                    <p><strong>{product.title}</strong></p>
                </div>
            )}
        </div>
        <div className="button my-10">
            <button disabled={loadDisable} onClick={increaseClick} className="cursor-pointer border px-3 py-2 rounded-lg">
                Load more
            </button>
            {(loadDisable) ? "All 100 products have been fetched" : null}
        </div>
    </div>
}

export default Load_more 