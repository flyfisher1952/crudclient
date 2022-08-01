import logo from "./logo.svg";
import "./App.css";
import React from "react";

class GetAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        const axios = require("axios");
        axios
            .get("http://localhost:8080/api/products")
            .then(resp => {
                this.setState({ products: resp.data });
            })
            .catch(error => {
                console.error("GET Error - ", error);
            });
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'> All Products </header>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        for(var product in this.state.products)
                        {
                            <tr>
                                <td>product.id</td>
                                <td>product.name</td>
                                <td>product.description</td>
                                <td>product.price</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetAll;
