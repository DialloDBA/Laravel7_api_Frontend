import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowProducts = () => {


    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts()
    },[]);

    const getAllProducts = async ()=>{
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data);
    }
    const deleteProduct = async (id)=>{
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }
    return (
        <div className="pt-5">
            <table className="table table-striped table-bordered text-center">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        products.map(product=>{
                            return(
                                <tr key={product.id}>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
                                        <button className="btn btn-danger btn-sm mx-2" onClick={()=>deleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr className="bg-dark text-light" style={{ fontWeight:'bold'}}>
                        <td className="text-uppercase">Total</td>
                        <td colSpan="3" className="">{products.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts
