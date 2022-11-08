import React, { useEffect, useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';


const DetailProduct = () => {
  const [product, setProduct] = useState();
  const param = useParams();
  const navigate = useNavigate();

  const fetchProducts = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = {...response?.data?.data?.product};
      console.log(payload);
      setProduct(payload|| []);
    } 
  
    catch (error){
     alert(error);
    }

  };

  useEffect(() => {
    if (param.id) {
      fetchProducts(param.id)
    }
  }, [])
 
  return (
    <>
    <div className='text-center'>
      
      <button onClick={() => navigate(-1)}>Balek</button>
      <div className='text-center'>DetailProduct</div>
      <p>Nama Produk: {product?.name}</p>
      <p>Harga: {product?.price}</p>
      <p>Penjual: {product?.ownerId?.name}</p>
    
    </div>
    
    </>
  )
}

export default DetailProduct