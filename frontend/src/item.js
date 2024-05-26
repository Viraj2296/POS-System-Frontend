import axios from "axios";
import { useEffect, useState } from "react";

function item() {

    const [items, setitems] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/items")
            .then(function (response) {
                setitems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:8080/categories")
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [item_categoryId, setitem_categoryId] = useState(null);


    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(parseFloat(event.target.value));
    }

    function handleQuantity(event) {
        setQty(parseInt(event.target.value));
    }

    function handleitem_category(event) {
        setitem_categoryId(event.target.value);
    }

    function createitem(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: qty,
            item_categoryId: item_categoryId
        };

        axios
            .post("http://localhost:8080/items", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [edit, setEdit] = useState(false);
    const [itemId, setitemId] = useState(null);

    function getitems() {
        axios.get("http://localhost:8080/items")
            .then(function (response) {
                setitems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function updateitem(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: qty,
            item_categoryId: item_categoryId
        }

        axios.put("http://localhost:8080/items/" + itemId, data)
            .then(function (response) {
                getitems();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>items</h1>

            {items && items.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>item_category: {item.item_category?.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Qty: {item.quantity}</p>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            setEdit(true);
                            setitemId(item.id);
                            setName(item.name);
                            setPrice(item.price);
                            setQty(item.quantity);
                            setitem_categoryId(item.item_category?.id);
                        }}>Edit</button>
                    </div>
                )
            })
            }

            {!edit &&

                <form onSubmit={createitem}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={handleName} required />
                    </div>

                    <br />

                    <div>
                        <label>Price</label>
                        <input type="text" onChange={handlePrice} required />
                    </div>

                    <br />

                    <div>
                        <label>Quantity</label>
                        <input type="text" onChange={handleQuantity} required />
                    </div>

                    <div>
                        <label>item_category</label>
                        <select onChange={handleitem_category} required>
                            <option value="">Select a item_category</option>

                            {categories && categories.map((item_category) => (
                                <option key={item_category.id} value={item_category.id} selected={item_categoryId === item_category.id}>{item_category.name}</option>
                            ))}
                        </select>
                    </div>

                    <br />
                    <br />
                    <button type="submit">Create item</button>
                </form>
            }

            {edit &&
                <form onSubmit={updateitem}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={handleName} value={name} required />
                    </div>

                    <br />

                    <div>
                        <label>Price</label>
                        <input type="text" onChange={handlePrice} value={price} required />
                    </div>

                    <br />

                    <div>
                        <label>Quantity</label>
                        <input type="text" onChange={handleQuantity} value={qty} required />
                    </div>

                    <div>
                        <label>item_category</label>
                        <select onChange={handleitem_category} required>
                            <option value="">Select a item_category</option>

                            {categories && categories.map((item_category) => (
                                <option key={item_category.id} value={item_category.id} selected={item_category.id === item_categoryId}>{item_category.name}</option>
                            ))}
                        </select>
                    </div>

                    <br />
                    <br />
                    <button type="submit">Update item</button>
                </form>
            }

        </div>
    )
}

export default item;