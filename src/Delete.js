import "./App.css";
import React, { useState } from "react";

function Delete() {
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState("");

    function getProduct() {
        const axios = require("axios");

        axios
            .delete("http://localhost:8085/api/products/" + product.id)
            .then(resp => {
                setMessage(resp.data.delete);
            })
            .catch(error => {
                console.error("Delete by ID Error - ", error);
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
                            <button onClick={getProduct.bind(this)}>Delete Product</button>
                        </td>
                        <td>{message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Delete;
