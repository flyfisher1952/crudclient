import "./App.css";
import React from "react";

class Get extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {} };
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
                <label>Enter the Product ID</label>
                <input onChange={this.onIdChange}></input>
                <br />
                <button onClick={this.getProduct.bind(this)}>Get Product</button>
                <p>
                    Name: {this.state.product.name}
                    <br />
                    Description: {this.state.product.description}
                    <br />
                    Price: {this.setState.product.price}
                </p>
            </div>
        );
    }
}

export default Get;
