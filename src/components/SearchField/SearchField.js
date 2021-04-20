import {useState} from 'react';

const SearchField = () => {

    const products = ['dairy', 'yoghut', 'paneer', 'milkshake', 'tanay', 'lorem', 'ipsum'];

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
            <div className="products"><em>{filteredItem.map(value=> {
                return <ul key={value}><li>{value}</li></ul>
            })}</em></div>
        </div>
        </div>
     );
}
 
export default SearchField;