import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

const endpoint = "http://localhost:8000/api/product/";

const EditProduct = (props) => {
    // let id = props.match.params.id ;
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const {id} = useParams();

    const update = async (e)=>{
        e.preventDefault();
        await axios.put(`${endpoint}${id}`,{
            description:description,
            price : price,
            stock : stock,
        })
        props.history.push('/')
    }
    useEffect(() => {
        const getProductById = async ()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById();
    }, [])
    
    return (
        <div>
            
            <h1 className="text-uppercase">Edit Product #{id}</h1>
            <form className="" onSubmit={update}>
                <div className="form-group my-2">
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

export default EditProduct
