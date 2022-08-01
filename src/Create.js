import "./App.css";
import React from "react";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: {} };
    }

    onIdChange = e => {
        this.setState({ id: e.target.value });
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

    createProduct(event) {
        const axios = require("axios");
        axios
            .post("http://localhost:8080/api/products/", {
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
                                Enter the Product Information
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>ID</label>
                                <input onChange={this.onIdChange}></input>
                            </td>
                            <td>
                                <label>Name</label>
                                <input onChange={this.onNameChange}></input>
                            </td>
                            <td>
                                <label>Description</label>
                                <input onChange={this.onDescriptionChange}></input>
                            </td>
                            <td>
                                <label>Price</label>
                                <input onChange={this.onPriceChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='float-right' colSpan={4}>
                                <button onClick={this.createProduct.bind(this)}>Create Product</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Create;
