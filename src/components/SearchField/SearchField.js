import { useState, useEffect } from 'react';

const SearchField = () => {
    const [filteredItem, setFilter] = useState(null);
    const [apiProducts, setProducts] = useState([]);
    const [searchValue, setSearch] = useState('');



    useEffect(() => {

        setTimeout(() => {
            fetch("https://fakestoreapi.com/products/")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProducts(data);   
                    filterFunction();    
                })
        }, 2000);

    }, [])


    // var isProduct = "";

    // if (apiProducts) {
    //     isProduct = true
    // } else {
    //     isProduct = false
    // }

    // const isProduct = apiProducts ? true : false;


    const handleInput = (e) => {
        setSearch(e.target.value);
      

    }

    const filterFunction = ()=> {
        let reFiltered = apiProducts.filter(product => product.title.includes(searchValue));
        setFilter(reFiltered)
        
 }

    
    
    // if (isProduct){
    //  var filteredItem = apiProducts.filter(product => true)
    // }


    const buttonVisibility = searchValue.length > 0;

    return (
        <div className="searchField">
            <div className="home">

                <input type="text" name="values" placeholder="Seach for products" onChange={(e) => handleInput(e)} />
                {buttonVisibility && <button>clear</button>}

                {filteredItem ? <div className="products"><em>{filteredItem.map(value => {
                    return <p>loll</p> })}</em></div> : <p>Loding...</p>}

            </div>
        </div>
    );
}

export default SearchField;


















