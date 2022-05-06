import React,{useState} from 'react'
import axios from 'axios';

const endpoint = "http://localhost:8000/api/product";

const CreateProducts = (props) => {

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const store = async (e) =>{
        e.preventDefault();
        await axios.post(`${endpoint}`,{
            description:description,
            price : price,
            stock : stock,
        })
        props.history.push('/');
    }

    return (
        <div className="pt-5">
            <h1 className="text-uppercase">Create Product</h1>
            <form className="" onSubmit={store}>
                <div className="form-group mb-2">
                    <label htlmfor="description" className="control-label">Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description"/>

                </div>
                <div className="form-group my-2">
                    <label htlmfor="price" className="control-label">Price</label>
                    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" id="price"/>
                </div>
                <div className="form-group my-2">
                    <label htlmfor="stock" className="control-label">Stock</label>
                    <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} className="form-control" id="stock" />
                </div>
                <div className="form-group my-2">
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProducts
