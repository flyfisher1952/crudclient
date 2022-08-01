import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Get from "./Get";
import GetAll from "./GetAll";
import Create from "./Create";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <table>
            <tbody>
                <tr>
                    <td>
                        <h1>Get a Product</h1>
                        <Get />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>Add a Product</h1>
                        <Create />
                    </td>
                </tr>
                <tr>
                    <td>
                        <GetAll />
                    </td>
                </tr>
            </tbody>
        </table>
    </React.StrictMode>
);
