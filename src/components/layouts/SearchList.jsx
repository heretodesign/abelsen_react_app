import React from 'react';

const SearchList = (props) => {

    let searchitem = props.filteredProducts.map((product) => (
        <>
            <div className="card" key={product.id}>
                <img src={`${process.env.PUBLIC_URL}images/${product.image}`} className="card-img-top" alt="album-img" />
                <div className="card-body">
                    <p className="cards-text mb-0 justify-content-start" id="cards-text" data-testid="product-title">{product.title}</p>
                    <p className="cards-text mb-0 justify-content-start" id="cards-text-name" data-testid="product-author"><small className="text-muted">by: {product.author}</small></p>
                </div>
            </div>
        </>
    )
    )
    return (
        <>
            {/* {searchitem} */}
        </>
    );
}

export default SearchList;
