import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function stocks() {

    const [stocks, setstocks] = useState(null);

    const navigate = useNavigate(); //to navigate users programatically 

    useEffect(() => {
        axios.get("http://localhost:8080/stocks")
            .then(function (response) {
                setstocks(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function createstock() {
        axios.post("http://localhost:8080/stocks")
            .then(function (response) {
                navigate(`/stocks/${response.data.id}/editstock`);
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1>stocks</h1>

            <div className="text-end">
                <button type="button" onClick={createstock} className="btn btn-primary">Create stock</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Date and Time</th>
                        <th>Total Items</th>
                        <th>Total Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {stocks && stocks.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.stockDate}</td>
                            <td>{stock.stockeditems.length}</td>
                            <td>{stock.totalPrice}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={() => {
                                navigate(`/stocks/${stock.id}/editstock`)
                            }}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default stocks;