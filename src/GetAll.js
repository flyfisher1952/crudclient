import "./App.css";
import React, { useState, useEffect } from "react";

function GetAll() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        const axios = require("axios");
        axios
            .get("http://localhost:8080/api/products")
            .then(resp => {
                setProducts(resp.data);
            })
            .catch(error => {
                console.error("GetAll Error - ", error);
            });
    }

    useEffect(() => {
        getProducts();
    });

    var list = products.map(product => (
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
                <button onClick={getProducts}>Refresh</button>
            </div>
        </div>
    );
}

export default GetAll;
