import React, { Component } from 'react';
import ApiService from '../services/APIService'
import Card from '../components/shared/Card'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getProductsList()
    }
    
    async getProductsList() {
        try {
            const response = await ApiService.getProducts();
            const res = response.data
            this.setState({
                products: res
            })
        } catch(error) {
            console.log("error", error);
        }
    }
    
    render() {
        const { products } = this.state

        return (
            <div className="row">
                <div className="col d-flex flex-wrap" data-testid="card-wrapper">
                    <Card products={products} />
                </div>
            </div>    
        );
    }
}

Main.defaultProps = {
    products: []
}

export default Main;
