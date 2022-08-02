import "./App.css";
import React, { useState, useEffect } from "react";

function Get() {
    const [product, setProduct] = useState({});

    function getProduct() {
        const axios = require("axios");
        axios
            .get("http://localhost:8080/api/products/" + product.id)
            .then(resp => {
                setProduct(resp.data[0]);
            })
            .catch(error => {
                console.error("Get by ID Error - ", error);
            });
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Enter the Product ID</label>
                        </td>
                        <td>
                            <input onChange={e => setProduct({ id: e.target.value })}></input>
                        </td>
                        <td>
                            <button onClick={getProduct.bind(this)}>Get Product</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Name: {product.name}</td>
                        <td>Description: {product.description}</td>
                        <td> Price: {product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Get;
