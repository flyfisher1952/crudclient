import "./App.css";
import React from "react";

class Get extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {}, id: 0 };
    }

    onIdChange = e => {
        this.setState({ id: e.target.value });
    };

    getProduct() {
        const axios = require("axios");
        axios
            .get("http://localhost:8080/api/products/" + this.state.id)
            .then(resp => {
                this.setState({ product: resp.data[0] });
            })
            .catch(error => {
                console.error("Get by ID Error - ", error);
            });
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Enter the Product ID</label>
                            </td>
                            <td>
                                <input onChange={this.onIdChange}></input>
                            </td>
                            <td>
                                <button onClick={this.getProduct.bind(this)}>Get Product</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Name: {this.state.product.name}</td>
                            <td>Description: {this.state.product.description}</td>
                            <td> Price: {this.state.product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Get;
