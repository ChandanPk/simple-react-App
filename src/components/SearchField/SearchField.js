import {useState, useEffect} from 'react';

const SearchField = () => {
    console.log('bitch')
    var products = [];
    const [apiProducts, setApi] = useState();

    

    

    fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

    // for(var i=0; i<json.products.length; i++){
        //     json.products.map(product => {
        //         console.log(json.products[i].name);
        //     })
    // console.log(products)
    

    const [searchValue, setSearch] = useState('')
    
        const handleInput = (e)=> {
        setSearch(e.target.value);
    
}
        const filteredItem = products.filter(product=> product.includes(searchValue));
        const buttonVisibility = searchValue.length > 0;

    return ( 
        <div className="searchField">
        <div className="home">

            <input type="text" name="values" placeholder="Seach for products" onChange={(e)=> handleInput(e)}/>
            {buttonVisibility && <button>clear</button>}

            <div className="products"><em>{products.map(value=> {
                return <ul key={value}><li>{value}</li></ul>
            })}</em></div>

        </div>
        </div>
     );
}
 
export default SearchField;