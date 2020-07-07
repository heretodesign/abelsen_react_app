import React from 'react';
import PropTypes from 'prop-types'

const Card = (props) => {

    const isLoading = () => {
        return <p data-testid="loading">Loading...</p>
    }

    const productCard = props.products.map(product => (
        product.length > 0 ? isLoading()
        :   <div className="card" key={product.id} style={divStyle}>
            <img src={`${process.env.PUBLIC_URL}images/${product.image}`} className="card-img-top" alt="album-img" />
            <div className="card-body">
                <p className="cards-text mb-0 justify-content-start" id="cards-text" data-testid="product-title">{product.title}</p>
                <p className="cards-text mb-0 justify-content-start" id="cards-text-name" data-testid="product-author"><small className="text-muted">by: {product.author}</small></p>
            </div>
        </div>
    ))
    return (
        <>
            {productCard}
        </>
    );
}

const divStyle = {
    width: '12rem',
    margin: '5px 2px'
};

Card.defaultProps = {
    products: []
}

Card.propTypes = {
    image: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
};

export default Card;
