import "./App.css";
import React from "react";

class GetAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    getAll() {
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

    componentDidMount() {
        this.getAll();
    }

    render() {
        var list = this.state.products.map(product => (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>
        ));
        return (
            <div>
                <h1> All Products </h1>
                <table>
                    <tbody>{list}</tbody>
                </table>
                <div>
                    <button onClick={this.getAll}>Refresh</button>
                </div>
            </div>
        );
    }
}

export default GetAll;
