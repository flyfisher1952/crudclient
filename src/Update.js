import "./App.css";
import React from "react";

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {} };
    }

    getProduct(id) {}

    onIdChange = e => {
        this.setState({ id: e.target.value });

        console.log("Fetching Product for ID == " + e.target.value);
        const axios = require("axios");
        axios
            .get("http://localhost:8080/api/products/" + e.target.value)
            .then(resp => {
                this.setState({ product: resp.data[0] });
                this.setState({ id: this.state.product.id });
                this.setState({ name: this.state.product.name });
                this.setState({ description: this.state.product.description });
                this.setState({ price: this.state.product.price });
                console.log("NAME: " + this.state.product.name);
                console.log(this.state.product);
            })
            .catch(error => {
                console.error("Get by ID Error - ", error);
            });
    };

    onNameChange = e => {
        this.setState({ name: e.target.value });
    };

    onDescriptionChange = e => {
        this.setState({ description: e.target.value });
    };

    onPriceChange = e => {
        this.setState({ price: e.target.value });
    };

    updateProduct(event) {
        const axios = require("axios");
        axios
            .put("http://localhost:8080/api/products/", {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
            })
            .then(resp => {
                console.log(resp.data);
            })
            .catch(error => {
                console.error("Create Product Error - ", error);
            });
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className='text-align-center' colSpan={4}>
                                Update the Product Information
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>ID </label>
                                <input onChange={this.onIdChange}></input>
                            </td>
                            <td>
                                <label>Name </label>
                                <input onChange={this.onNameChange}></input>
                            </td>
                            <td>
                                <label>Description </label>
                                <input onChange={this.onDescriptionChange}></input>
                            </td>
                            <td>
                                <label>Price </label>
                                <input onChange={this.onPriceChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='float-right' colSpan={4}>
                                <button onClick={this.updateProduct.bind(this)}>Update the Product</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Update;
