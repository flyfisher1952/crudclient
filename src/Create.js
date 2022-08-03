import "./App.css";
import React, { useState } from "react";

function Create() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    function createProduct(event) {
        const axios = require("axios");
        axios
            .post("http://localhost:8085/api/products/", {
                id: id,
                name: name,
                description: description,
                price: price,
            })
            .then(resp => {
                console.log(resp.data);
            })
            .catch(error => {
                console.error("Create Error - ", error);
            });
    }

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
                            <input onChange={e => setId(e.target.value)}></input>
                        </td>
                        <td>
                            <label>Name</label>
                            <input onChange={e => setName(e.target.value)}></input>
                        </td>
                        <td>
                            <label>Description</label>
                            <input onChange={e => setDescription(e.target.value)}></input>
                        </td>
                        <td>
                            <label>Price</label>
                            <input onChange={e => setPrice(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='float-right' colSpan={4}>
                            <button onClick={createProduct.bind(this)}>Create Product</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Create;
