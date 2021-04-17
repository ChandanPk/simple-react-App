import {useState} from 'react';

const SearchField = () => {

    const [values, setValue] = useState(['dairy', 'yoghut', 'paneer', 'milkshake', 'tanay', 'lorem', 'ipsum'])

const handleInput = (e)=> {
        setValue(e.target.value);
}

    return ( 
        <div className="searchField">
        <div className="home">
            <input type="text" name="values" placeholder="Seach for products" onChange={(e)=> handleInput(e)}/>
            <button>clear</button>
            <div className="products"><em>{values.map(value=> {
                return <ul><li>{value}</li></ul>
            })}</em></div>
        </div>
        </div>
     );
}
 
export default SearchField;