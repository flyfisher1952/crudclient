import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import GetAll from "./GetAll";
import Create from "./Create";
import Update from "./Update";
import Get from "./Get";
import React from "react";
import Delete from "./Delete";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<GetAll />} />
                    <Route path='/Create' element={<Create />} />
                    <Route path='/Update' element={<Update />} />
                    <Route path='/Get' element={<Get />} />
                    <Route path='/Delete' element={<Delete />} />
                </Routes>
                <table>
                    <tr>
                        <td>
                            <Link to='/'>View All</Link>
                        </td>
                        <td>
                            <Link to='/Create'>Create</Link>
                        </td>
                        <td>
                            <Link to='/Update'>Update</Link>
                        </td>
                        <td>
                            <Link to='/Get'>Get</Link>
                        </td>
                        <td>
                            <Link to='/Delete'>Delete</Link>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;
