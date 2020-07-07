import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/images/150px-Avatar.jpg"
import ApiService from '../../services/APIService'
import SearchList from './SearchList'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            getList: []
        }
    }

    componentDidMount() {
        this.searchProducts()
    }
    
    async searchProducts() {
        try {
            const response = await ApiService.getUnFilteredData();
            const resData = response.data
            this.setState({
                getList: resData
            })
        } catch(error) {
            console.log("error", error);
        }
    }

    handleInput = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search, getList } = this.state

        const filteredProducts = getList.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        })

        return (
            <React.Fragment>
                <SearchList filteredProducts={filteredProducts} />
                <nav className="navbar navbar-expand-lg" data-testid="navbar-section">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <div className="row no-gutters ml-2  align-items-center">
                                    <input className="form-control rounded-pill pr-5" type="search" placeholder="Type to Search.." data-testid="search-input" onChange={this.handleInput} />
                                    <div className="col-auto">
                                        <button className="btn btn-outline-light text-black-50 border-0 rounded-pill ml-n5" type="button">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <img src={logo} width="30" height="30" className="avatar d-inline-block align-top" alt="" loading="lazy" />
                            <span className="username" data-testid="username">Lorem ipsum</span>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
